type Endpoint = {
  description?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type Endpoints = Endpoint[]
type Error = { code: number | null; message: string | null }
type Health = { haproxy?: 'up' | 'down' | 'unknown' | undefined }
type Info = {
  api?: { build_date?: string | undefined; version?: string | undefined } | undefined
  system?:
    | {
        cpu_info?: { model?: string | undefined; num_cpus?: number | undefined } | undefined
        hostname?: string | undefined
        mem_info?:
          | {
              dataplaneapi_memory?: number | undefined
              free_memory?: number | undefined
              total_memory?: number | undefined
            }
          | undefined
        os_string?: string | undefined
        time?: number | undefined
        uptime?: (number | null) | undefined
      }
    | undefined
}
type AwsFilters = { key: string; value: string }
type AwsRegion = {
  access_key_id?: string | undefined
  allowlist?: AwsFilters[] | undefined
  denylist?: AwsFilters[] | undefined
  description?: string | undefined
  enabled: boolean
  id?: (string | null) | undefined
  ipv4_address: 'private' | 'public'
  name: string
  region: string
  retry_timeout: number
  secret_access_key?: string | undefined
  server_slots_base?: number | undefined
  server_slots_growth_increment?: number | undefined
  server_slots_growth_type?: 'linear' | 'exponential' | undefined
}
type AwsRegions = AwsRegion[]
type Consul = {
  address: string
  defaults?: string | undefined
  description?: string | undefined
  enabled: boolean
  health_check_policy?: 'none' | 'any' | 'all' | 'min' | undefined
  health_check_policy_min?: number | undefined
  id?: (string | null) | undefined
  mode?: 'http' | 'https' | undefined
  name?: string | undefined
  namespace?: string | undefined
  port: number
  retry_timeout: number
  server_slots_base?: number | undefined
  server_slots_growth_increment?: number | undefined
  server_slots_growth_type?: 'linear' | 'exponential' | undefined
  service_allowlist?: string[] | undefined
  service_denylist?: string[] | undefined
  service_name_regexp?: string | undefined
  token?: string | undefined
}
type Consuls = Consul[]
type AcmeProvider = {
  account_key?: string | undefined
  acme_provider?: string | undefined
  acme_vars?: { [x: string]: string } | undefined
  bits?: (number | null) | undefined
  challenge?: 'http-01' | 'dns-01' | 'dns-persist-01' | undefined
  challenge_ready?: ('cli' | 'dns' | 'none')[] | undefined
  contact?: string | undefined
  curves?: string | undefined
  directory: string
  dns_delay?: (number | null) | undefined
  dns_timeout?: (number | null) | undefined
  eab_key_id?: string | undefined
  eab_mac_alg?: 'HS256' | 'HS384' | 'HS512' | undefined
  eab_mac_key?: string | undefined
  keytype?: 'RSA' | 'ECDSA' | undefined
  map?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  profile?: string | undefined
  reuse_key?: 'enabled' | 'disabled' | undefined
}
type AcmeProviders = AcmeProvider[]
type Balance = {
  algorithm:
    | 'first'
    | 'hash'
    | 'hdr'
    | 'leastconn'
    | 'random'
    | 'rdp-cookie'
    | 'roundrobin'
    | 'source'
    | 'static-rr'
    | 'uri'
    | 'url_param'
  hash_expression?: string | undefined
  hdr_name?: string | undefined
  hdr_use_domain_only?: boolean | undefined
  random_draws?: number | undefined
  rdp_cookie_name?: string | undefined
  uri_depth?: number | undefined
  uri_len?: number | undefined
  uri_path_only?: boolean | undefined
  uri_whole?: boolean | undefined
  url_param?: string | undefined
  url_param_check_post?: number | undefined
  url_param_max_wait?: number | undefined
}
type Compression = {
  'algo-req'?: 'identity' | 'gzip' | 'deflate' | 'raw-deflate' | undefined
  algorithms?: ('identity' | 'gzip' | 'deflate' | 'raw-deflate')[] | undefined
  'algos-res'?: ('identity' | 'gzip' | 'deflate' | 'raw-deflate')[] | undefined
  direction?: 'request' | 'response' | 'both' | undefined
  minsize_req?: number | undefined
  minsize_res?: number | undefined
  offload?: boolean | undefined
  types?: string[] | undefined
  'types-req'?: string[] | undefined
  'types-res'?: string[] | undefined
}
type Cookie = {
  attr?: { value?: string | undefined }[] | undefined
  domain?: { value?: string | undefined }[] | undefined
  dynamic?: boolean | undefined
  httponly?: boolean | undefined
  indirect?: boolean | undefined
  maxidle?: number | undefined
  maxlife?: number | undefined
  name: string
  nocache?: boolean | undefined
  postonly?: boolean | undefined
  preserve?: boolean | undefined
  secure?: boolean | undefined
  type?: 'rewrite' | 'insert' | 'prefix' | undefined
}
type DefaultServer = {
  'agent-addr'?: string | undefined
  'agent-check'?: 'enabled' | 'disabled' | undefined
  'agent-inter'?: (number | null) | undefined
  'agent-port'?: (number | null) | undefined
  'agent-send'?: string | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backup?: 'enabled' | 'disabled' | undefined
  cc?: string | undefined
  check?: 'enabled' | 'disabled' | undefined
  'check-pool-conn-name'?: string | undefined
  'check-reuse-pool'?: 'enabled' | 'disabled' | undefined
  'check-send-proxy'?: 'enabled' | 'disabled' | undefined
  'check-sni'?: string | undefined
  'check-ssl'?: 'enabled' | 'disabled' | undefined
  check_alpn?: string | undefined
  check_proto?: string | undefined
  check_sni_auto?: 'enabled' | 'disabled' | undefined
  check_via_socks4?: 'enabled' | 'disabled' | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  cookie?: string | undefined
  crl_file?: string | undefined
  curves?: string | undefined
  downinter?: (number | null) | undefined
  error_limit?: number | undefined
  fall?: (number | null) | undefined
  fastinter?: (number | null) | undefined
  force_sslv3?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: 'enabled' | 'disabled' | undefined
  force_tlsv11?: 'enabled' | 'disabled' | undefined
  force_tlsv12?: 'enabled' | 'disabled' | undefined
  force_tlsv13?: 'enabled' | 'disabled' | undefined
  guid?: string | undefined
  hash_key?: string | undefined
  health_check_address?: string | undefined
  health_check_port?: (number | null) | undefined
  idle_ping?: (number | null) | undefined
  'init-addr'?: (string | null) | undefined
  'init-state'?: 'fully-up' | 'up' | 'down' | 'fully-down' | undefined
  inter?: (number | null) | undefined
  ktls?: 'on' | 'off' | undefined
  'log-bufsize'?: (number | null) | undefined
  log_proto?: 'legacy' | 'octet-count' | undefined
  maintenance?: 'enabled' | 'disabled' | undefined
  max_reuse?: (number | null) | undefined
  maxconn?: (number | null) | undefined
  maxqueue?: (number | null) | undefined
  minconn?: (number | null) | undefined
  namespace?: string | undefined
  no_sslv3?: 'enabled' | 'disabled' | undefined
  no_tlsv10?: 'enabled' | 'disabled' | undefined
  no_tlsv11?: 'enabled' | 'disabled' | undefined
  no_tlsv12?: 'enabled' | 'disabled' | undefined
  no_tlsv13?: 'enabled' | 'disabled' | undefined
  no_verifyhost?: 'enabled' | 'disabled' | undefined
  npn?: string | undefined
  observe?: 'layer4' | 'layer7' | undefined
  'on-error'?: 'fastinter' | 'fail-check' | 'sudden-death' | 'mark-down' | undefined
  'on-marked-down'?: 'shutdown-sessions' | undefined
  'on-marked-up'?: 'shutdown-backup-sessions' | undefined
  pool_conn_name?: string | undefined
  pool_low_conn?: (number | null) | undefined
  pool_max_conn?: (number | null) | undefined
  pool_purge_delay?: (number | null) | undefined
  proto?: string | undefined
  'proxy-v2-options'?:
    | (
        | 'authority'
        | 'cert-cn'
        | 'cert-key'
        | 'cert-sig'
        | 'crc32c'
        | 'ssl'
        | 'ssl-cipher'
        | 'unique-id'
      )[]
    | undefined
  'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
  quic_cc_algo_max_window?: (number | null) | undefined
  redir?: string | undefined
  renegotiate?: 'enabled' | 'disabled' | undefined
  'resolve-net'?: string | undefined
  'resolve-prefer'?: 'ipv4' | 'ipv6' | undefined
  resolve_opts?: string | undefined
  resolvers?: string | undefined
  rise?: (number | null) | undefined
  'send-proxy'?: 'enabled' | 'disabled' | undefined
  'send-proxy-v2'?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl_cn?: 'enabled' | 'disabled' | undefined
  'set-proxy-v2-tlv-fmt'?: { id: string; value: string } | undefined
  shard?: number | undefined
  sigalgs?: string | undefined
  slowstart?: (number | null) | undefined
  sni?: string | undefined
  sni_auto?: 'enabled' | 'disabled' | undefined
  socks4?: string | undefined
  source?: string | undefined
  ssl?: 'enabled' | 'disabled' | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_reuse?: 'enabled' | 'disabled' | undefined
  sslv3?: 'enabled' | 'disabled' | undefined
  stick?: 'enabled' | 'disabled' | undefined
  'strict-maxconn'?: boolean | undefined
  tcp_md5sig?: string | undefined
  tcp_ut?: (number | null) | undefined
  tfo?: 'enabled' | 'disabled' | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  tlsv10?: 'enabled' | 'disabled' | undefined
  tlsv11?: 'enabled' | 'disabled' | undefined
  tlsv12?: 'enabled' | 'disabled' | undefined
  tlsv13?: 'enabled' | 'disabled' | undefined
  track?: string | undefined
  verify?: 'none' | 'required' | undefined
  verifyhost?: string | undefined
  weight?: (number | null) | undefined
  ws?: 'auto' | 'h1' | 'h2' | undefined
}
type EmailAlert = {
  from: string
  level?: 'emerg' | 'alert' | 'crit' | 'err' | 'warning' | 'notice' | 'info' | 'debug' | undefined
  mailers: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  myhostname?: string | undefined
  to: string
}
type Errorfile = {
  code?:
    | 200
    | 400
    | 401
    | 403
    | 404
    | 405
    | 407
    | 408
    | 410
    | 413
    | 425
    | 429
    | 500
    | 501
    | 502
    | 503
    | 504
    | undefined
  file?: string | undefined
}
type Errorfiles = {
  codes?:
    | (
        | 200
        | 400
        | 401
        | 403
        | 404
        | 405
        | 407
        | 408
        | 410
        | 413
        | 425
        | 429
        | 500
        | 501
        | 502
        | 503
        | 504
      )[]
    | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type Errorloc = {
  code:
    | 200
    | 400
    | 401
    | 403
    | 404
    | 405
    | 407
    | 408
    | 410
    | 413
    | 425
    | 429
    | 500
    | 501
    | 502
    | 503
    | 504
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  url: string
}
type Forwarded = {
  by?: boolean | undefined
  by_expr?: string | undefined
  by_port?: boolean | undefined
  by_port_expr?: string | undefined
  enabled: 'enabled' | 'disabled'
  for?: boolean | undefined
  for_expr?: string | undefined
  for_port?: boolean | undefined
  for_port_expr?: string | undefined
  host?: boolean | undefined
  host_expr?: string | undefined
  proto?: boolean | undefined
}
type Forwardfor = {
  enabled: 'enabled'
  except?: string | undefined
  header?: string | undefined
  ifnone?: boolean | undefined
}
type HashType = {
  function?: 'sdbm' | 'djb2' | 'wt6' | 'crc32' | 'none' | undefined
  method?: 'map-based' | 'consistent' | undefined
  modifier?: 'avalanche' | undefined
}
type HttpchkParams = {
  host?: string | undefined
  method?:
    | 'HEAD'
    | 'PUT'
    | 'POST'
    | 'GET'
    | 'TRACE'
    | 'PATCH'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | undefined
  uri?: string | undefined
  version?: string | undefined
}
type MysqlCheckParams = {
  client_version?: 'pre-41' | 'post-41' | undefined
  username?: string | undefined
}
type Originalto = { enabled: 'enabled'; except?: string | undefined; header?: string | undefined }
type PersistRule = { rdp_cookie_name?: string | undefined; type: 'rdp-cookie' }
type PgsqlCheckParams = { username?: string | undefined }
type Redispatch = { enabled: 'enabled' | 'disabled'; interval?: (number | null) | undefined }
type SmtpchkParams = { domain?: string | undefined; hello?: string | undefined }
type Source = {
  address: string
  address_second?: string | undefined
  hdr?: string | undefined
  interface?: string | undefined
  occ?: string | undefined
  port?: number | undefined
  port_second?: number | undefined
  usesrc?: 'address' | 'client' | 'clientip' | 'hdr_ip' | undefined
}
type StatsAuth = { passwd: string; user: string }
type StatsHttpRequest = {
  cond?: string | undefined
  cond_test?: string | undefined
  realm?: string | undefined
  type: 'allow' | 'deny' | 'auth'
}
type StatsOptions = {
  stats_admin?: boolean | undefined
  stats_admin_cond?: 'if' | 'unless' | undefined
  stats_admin_cond_test?: string | undefined
  stats_auths?: StatsAuth[] | undefined
  stats_enable?: boolean | undefined
  stats_hide_version?: boolean | undefined
  stats_http_requests?: StatsHttpRequest[] | undefined
  stats_maxconn?: number | undefined
  stats_realm?: boolean | undefined
  stats_realm_realm?: (string | null) | undefined
  stats_refresh_delay?: (number | null) | undefined
  stats_show_desc?: (string | null) | undefined
  stats_show_legends?: boolean | undefined
  stats_show_modules?: boolean | undefined
  stats_show_node_name?: (string | null) | undefined
  stats_show_version?: boolean | undefined
  stats_uri_prefix?: string | undefined
}
type ConfigStickTable = {
  expire?: (number | null) | undefined
  keylen?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  nopurge?: boolean | undefined
  peers?: string | undefined
  recv_only?: boolean | undefined
  size?: (number | null) | undefined
  srvkey?: 'addr' | 'name' | undefined
  store?: string | undefined
  type?: 'ip' | 'ipv6' | 'integer' | 'string' | 'binary' | undefined
  write_to?: (string | null) | undefined
}
type UseSmallBuffers = {
  check?: boolean | undefined
  enabled: 'enabled' | 'disabled'
  l7_retries?: boolean | undefined
  queue?: boolean | undefined
}
type Acl = {
  acl_name: string
  criterion: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  value?: string | undefined
}
type Acls = Acl[]
type Filter = {
  app_name?: string | undefined
  bandwidth_limit_name?: string | undefined
  cache_name?: string | undefined
  default_limit?: number | undefined
  default_period?: number | undefined
  key?: string | undefined
  limit?: number | undefined
  lua_args?: string[] | undefined
  lua_name?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  min_size?: number | undefined
  spoe_config?: string | undefined
  spoe_engine?: string | undefined
  table?: string | undefined
  trace_hexdump?: boolean | undefined
  trace_max_fwd?: (number | null) | undefined
  trace_name?: string | undefined
  trace_rnd_forwarding?: boolean | undefined
  trace_rnd_parsing?: boolean | undefined
  type:
    | 'bwlim-in'
    | 'bwlim-out'
    | 'cache'
    | 'compression'
    | 'comp-req'
    | 'comp-res'
    | 'fcgi-app'
    | 'spoe'
    | 'trace'
    | 'lua'
}
type Filters = Filter[]
type HttpAfterResponseRule = {
  acl_file?: string | undefined
  acl_keyfmt?: string | undefined
  capture_id?: (number | null) | undefined
  capture_len?: number | undefined
  capture_sample?: string | undefined
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  hdr_expr?: string | undefined
  hdr_format?: string | undefined
  hdr_match?: string | undefined
  hdr_method?: string | undefined
  hdr_name?: string | undefined
  hdr_prefix?: string | undefined
  log_level?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | 'silent'
    | undefined
  log_profile?: string | undefined
  map_file?: string | undefined
  map_keyfmt?: string | undefined
  map_valuefmt?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  sc_expr?: string | undefined
  sc_id?: number | undefined
  sc_idx?: number | undefined
  sc_int?: (number | null) | undefined
  status?: number | undefined
  status_reason?: string | undefined
  strict_mode?: 'on' | 'off' | undefined
  type:
    | 'add-header'
    | 'add-headers-bin'
    | 'allow'
    | 'capture'
    | 'del-acl'
    | 'del-header'
    | 'del-headers-bin'
    | 'del-map'
    | 'replace-header'
    | 'replace-value'
    | 'sc-add-gpc'
    | 'sc-inc-gpc'
    | 'sc-inc-gpc0'
    | 'sc-inc-gpc1'
    | 'sc-set-gpt'
    | 'sc-set-gpt0'
    | 'set-header'
    | 'set-headers-bin'
    | 'set-log-level'
    | 'set-map'
    | 'set-status'
    | 'set-var'
    | 'set-var-fmt'
    | 'strict-mode'
    | 'unset-var'
    | 'do-log'
  var_expr?: string | undefined
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
}
type HttpAfterResponseRules = HttpAfterResponseRule[]
type ReturnHeader = { fmt: string; name: string }
type HttpCheck = {
  addr?: string | undefined
  alpn?: string | undefined
  body?: string | undefined
  body_log_format?: string | undefined
  check_comment?: string | undefined
  default?: boolean | undefined
  error_status?: 'L7OKC' | 'L7RSP' | 'L7STS' | 'L6RSP' | 'L4CON' | undefined
  exclamation_mark?: boolean | undefined
  headers?: ReturnHeader[] | undefined
  linger?: boolean | undefined
  match?: 'status' | 'rstatus' | 'hdr' | 'fhdr' | 'string' | 'rstring' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  method?:
    | 'HEAD'
    | 'PUT'
    | 'POST'
    | 'GET'
    | 'TRACE'
    | 'PATCH'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | undefined
  min_recv?: (number | null) | undefined
  ok_status?: 'L7OK' | 'L7OKC' | 'L6OK' | 'L4OK' | undefined
  on_error?: string | undefined
  on_success?: string | undefined
  pattern?: string | undefined
  port?: (number | null) | undefined
  port_string?: string | undefined
  proto?: string | undefined
  send_proxy?: boolean | undefined
  sni?: string | undefined
  ssl?: boolean | undefined
  'status-code'?: string | undefined
  tout_status?: 'L7TOUT' | 'L6TOUT' | 'L4TOUT' | undefined
  type:
    | 'comment'
    | 'connect'
    | 'disable-on-404'
    | 'expect'
    | 'send'
    | 'send-state'
    | 'set-var'
    | 'set-var-fmt'
    | 'unset-var'
  uri?: string | undefined
  uri_log_format?: string | undefined
  var_expr?: string | undefined
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
  version?: string | undefined
  via_socks4?: boolean | undefined
}
type HttpChecks = HttpCheck[]
type HttpErrorRule = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  return_content?: string | undefined
  return_content_format?:
    | 'default-errorfiles'
    | 'errorfile'
    | 'errorfiles'
    | 'file'
    | 'lf-file'
    | 'string'
    | 'lf-string'
    | undefined
  return_content_type?: (string | null) | undefined
  return_hdrs?: ReturnHeader[] | undefined
  status:
    | 200
    | 400
    | 401
    | 403
    | 404
    | 405
    | 407
    | 408
    | 410
    | 413
    | 425
    | 429
    | 500
    | 501
    | 502
    | 503
    | 504
  type: 'status'
}
type HttpErrorRules = HttpErrorRule[]
type HttpRequestRule = {
  acl_file?: string | undefined
  acl_keyfmt?: string | undefined
  auth_realm?: string | undefined
  bandwidth_limit_limit?: string | undefined
  bandwidth_limit_name?: string | undefined
  bandwidth_limit_period?: string | undefined
  cache_name?: string | undefined
  capture_id?: (number | null) | undefined
  capture_len?: number | undefined
  capture_sample?: string | undefined
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  deny_status?: (number | null) | undefined
  expr?: string | undefined
  hdr_expr?: string | undefined
  hdr_format?: string | undefined
  hdr_match?: string | undefined
  hdr_method?: string | undefined
  hdr_name?: string | undefined
  hdr_prefix?: string | undefined
  hint_format?: string | undefined
  hint_name?: string | undefined
  log_level?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | 'silent'
    | undefined
  log_profile?: string | undefined
  lua_action?: string | undefined
  lua_params?: string | undefined
  map_file?: string | undefined
  map_keyfmt?: string | undefined
  map_valuefmt?: string | undefined
  mark_value?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  method_fmt?: string | undefined
  nice_value?: number | undefined
  normalizer?:
    | 'fragment-encode'
    | 'fragment-strip'
    | 'path-merge-slashes'
    | 'path-strip-dot'
    | 'path-strip-dotdot'
    | 'percent-decode-unreserved'
    | 'percent-to-uppercase'
    | 'query-sort-by-name'
    | undefined
  normalizer_full?: boolean | undefined
  normalizer_strict?: boolean | undefined
  path_fmt?: string | undefined
  path_match?: string | undefined
  protocol?: 'ipv4' | 'ipv6' | undefined
  'query-fmt'?: string | undefined
  redir_code?: 301 | 302 | 303 | 307 | 308 | undefined
  redir_option?: string | undefined
  redir_type?: 'location' | 'prefix' | 'scheme' | undefined
  redir_value?: string | undefined
  resolvers?: string | undefined
  return_content?: string | undefined
  return_content_format?:
    | 'default-errorfiles'
    | 'errorfile'
    | 'errorfiles'
    | 'file'
    | 'lf-file'
    | 'string'
    | 'lf-string'
    | undefined
  return_content_type?: (string | null) | undefined
  return_hdrs?: ReturnHeader[] | undefined
  return_status_code?: (number | null) | undefined
  rst_ttl?: number | undefined
  sc_expr?: string | undefined
  sc_id?: number | undefined
  sc_idx?: number | undefined
  sc_int?: (number | null) | undefined
  service_name?: string | undefined
  spoe_engine?: string | undefined
  spoe_group?: string | undefined
  strict_mode?: 'on' | 'off' | undefined
  timeout?: string | undefined
  timeout_type?: 'client' | 'connect' | 'queue' | 'server' | 'tarpit' | 'tunnel' | undefined
  tos_value?: string | undefined
  track_sc_key?: string | undefined
  track_sc_stick_counter?: (number | null) | undefined
  track_sc_table?: string | undefined
  type:
    | 'add-acl'
    | 'add-header'
    | 'add-headers-bin'
    | 'allow'
    | 'auth'
    | 'cache-use'
    | 'capture'
    | 'del-acl'
    | 'del-header'
    | 'del-headers-bin'
    | 'del-map'
    | 'deny'
    | 'disable-l7-retry'
    | 'do-resolve'
    | 'early-hint'
    | 'lua'
    | 'normalize-uri'
    | 'pause'
    | 'redirect'
    | 'reject'
    | 'replace-header'
    | 'replace-path'
    | 'replace-pathq'
    | 'replace-uri'
    | 'replace-value'
    | 'return'
    | 'sc-add-gpc'
    | 'sc-inc-gpc'
    | 'sc-inc-gpc0'
    | 'sc-inc-gpc1'
    | 'sc-set-gpt'
    | 'sc-set-gpt0'
    | 'send-spoe-group'
    | 'set-bc-mark'
    | 'set-bc-tos'
    | 'set-dst'
    | 'set-dst-port'
    | 'set-fc-mark'
    | 'set-fc-tos'
    | 'set-header'
    | 'set-headers-bin'
    | 'set-log-level'
    | 'set-map'
    | 'set-mark'
    | 'set-method'
    | 'set-nice'
    | 'set-path'
    | 'set-pathq'
    | 'set-priority-class'
    | 'set-priority-offset'
    | 'set-query'
    | 'set-src'
    | 'set-src-port'
    | 'set-timeout'
    | 'set-tos'
    | 'set-uri'
    | 'set-var'
    | 'set-var-fmt'
    | 'silent-drop'
    | 'strict-mode'
    | 'tarpit'
    | 'track-sc'
    | 'unset-var'
    | 'use-service'
    | 'wait-for-body'
    | 'wait-for-handshake'
    | 'set-bandwidth-limit'
    | 'set-retries'
    | 'do-log'
  'uri-fmt'?: string | undefined
  'uri-match'?: string | undefined
  var_expr?: string | undefined
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
  wait_at_least?: (number | null) | undefined
  wait_time?: (number | null) | undefined
}
type HttpRequestRules = HttpRequestRule[]
type HttpResponseRule = {
  acl_file?: string | undefined
  acl_keyfmt?: string | undefined
  bandwidth_limit_limit?: string | undefined
  bandwidth_limit_name?: string | undefined
  bandwidth_limit_period?: string | undefined
  cache_name?: string | undefined
  capture_id?: (number | null) | undefined
  capture_sample?: string | undefined
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  deny_status?: (number | null) | undefined
  expr?: string | undefined
  hdr_expr?: string | undefined
  hdr_format?: string | undefined
  hdr_match?: string | undefined
  hdr_method?: string | undefined
  hdr_name?: string | undefined
  hdr_prefix?: string | undefined
  log_level?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | 'silent'
    | undefined
  log_profile?: string | undefined
  lua_action?: string | undefined
  lua_params?: string | undefined
  map_file?: string | undefined
  map_keyfmt?: string | undefined
  map_valuefmt?: string | undefined
  mark_value?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  nice_value?: number | undefined
  redir_code?: 301 | 302 | 303 | 307 | 308 | undefined
  redir_option?: string | undefined
  redir_type?: 'location' | 'prefix' | 'scheme' | undefined
  redir_value?: string | undefined
  return_content?: string | undefined
  return_content_format?:
    | 'default-errorfiles'
    | 'errorfile'
    | 'errorfiles'
    | 'file'
    | 'lf-file'
    | 'string'
    | 'lf-string'
    | undefined
  return_content_type?: (string | null) | undefined
  return_hdrs?: ReturnHeader[] | undefined
  return_status_code?: (number | null) | undefined
  rst_ttl?: number | undefined
  sc_expr?: string | undefined
  sc_id?: number | undefined
  sc_idx?: number | undefined
  sc_int?: (number | null) | undefined
  spoe_engine?: string | undefined
  spoe_group?: string | undefined
  status?: number | undefined
  status_reason?: string | undefined
  strict_mode?: 'on' | 'off' | undefined
  timeout?: string | undefined
  timeout_type?: 'client' | 'connect' | 'queue' | 'server' | 'tarpit' | 'tunnel' | undefined
  tos_value?: string | undefined
  track_sc_key?: string | undefined
  track_sc_stick_counter?: (number | null) | undefined
  track_sc_table?: string | undefined
  type:
    | 'add-acl'
    | 'add-header'
    | 'add-headers-bin'
    | 'allow'
    | 'cache-store'
    | 'capture'
    | 'del-acl'
    | 'del-header'
    | 'del-headers-bin'
    | 'del-map'
    | 'deny'
    | 'lua'
    | 'pause'
    | 'redirect'
    | 'replace-header'
    | 'replace-value'
    | 'return'
    | 'sc-add-gpc'
    | 'sc-inc-gpc'
    | 'sc-inc-gpc0'
    | 'sc-inc-gpc1'
    | 'sc-set-gpt'
    | 'sc-set-gpt0'
    | 'send-spoe-group'
    | 'set-fc-mark'
    | 'set-fc-tos'
    | 'set-header'
    | 'set-headers-bin'
    | 'set-log-level'
    | 'set-map'
    | 'set-mark'
    | 'set-nice'
    | 'set-status'
    | 'set-timeout'
    | 'set-tos'
    | 'set-var'
    | 'set-var-fmt'
    | 'silent-drop'
    | 'strict-mode'
    | 'track-sc'
    | 'unset-var'
    | 'wait-for-body'
    | 'set-bandwidth-limit'
    | 'do-log'
  var_expr?: string | undefined
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
  wait_at_least?: (number | null) | undefined
  wait_time?: (number | null) | undefined
}
type HttpResponseRules = HttpResponseRule[]
type LogTarget = {
  address?: string | undefined
  facility?:
    | 'kern'
    | 'user'
    | 'mail'
    | 'daemon'
    | 'auth'
    | 'syslog'
    | 'lpr'
    | 'news'
    | 'uucp'
    | 'cron'
    | 'auth2'
    | 'ftp'
    | 'ntp'
    | 'audit'
    | 'alert'
    | 'cron2'
    | 'local0'
    | 'local1'
    | 'local2'
    | 'local3'
    | 'local4'
    | 'local5'
    | 'local6'
    | 'local7'
    | undefined
  format?:
    | 'local'
    | 'rfc3164'
    | 'rfc5424'
    | 'priority'
    | 'short'
    | 'timed'
    | 'iso'
    | 'raw'
    | undefined
  global?: boolean | undefined
  length?: number | undefined
  level?: 'emerg' | 'alert' | 'crit' | 'err' | 'warning' | 'notice' | 'info' | 'debug' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  minlevel?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | undefined
  nolog?: boolean | undefined
  profile?: string | undefined
  sample_range?: string | undefined
  sample_size?: number | undefined
}
type LogTargets = LogTarget[]
type ServerSwitchingRule = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  target_server: string
}
type ServerSwitchingRules = ServerSwitchingRule[]
type ServerTemplate = {
  'agent-addr'?: string | undefined
  'agent-check'?: 'enabled' | 'disabled' | undefined
  'agent-inter'?: (number | null) | undefined
  'agent-port'?: (number | null) | undefined
  'agent-send'?: string | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backup?: 'enabled' | 'disabled' | undefined
  cc?: string | undefined
  check?: 'enabled' | 'disabled' | undefined
  'check-pool-conn-name'?: string | undefined
  'check-reuse-pool'?: 'enabled' | 'disabled' | undefined
  'check-send-proxy'?: 'enabled' | 'disabled' | undefined
  'check-sni'?: string | undefined
  'check-ssl'?: 'enabled' | 'disabled' | undefined
  check_alpn?: string | undefined
  check_proto?: string | undefined
  check_sni_auto?: 'enabled' | 'disabled' | undefined
  check_via_socks4?: 'enabled' | 'disabled' | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  cookie?: string | undefined
  crl_file?: string | undefined
  curves?: string | undefined
  downinter?: (number | null) | undefined
  error_limit?: number | undefined
  fall?: (number | null) | undefined
  fastinter?: (number | null) | undefined
  force_sslv3?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: 'enabled' | 'disabled' | undefined
  force_tlsv11?: 'enabled' | 'disabled' | undefined
  force_tlsv12?: 'enabled' | 'disabled' | undefined
  force_tlsv13?: 'enabled' | 'disabled' | undefined
  guid?: string | undefined
  hash_key?: string | undefined
  health_check_address?: string | undefined
  health_check_port?: (number | null) | undefined
  idle_ping?: (number | null) | undefined
  'init-addr'?: (string | null) | undefined
  'init-state'?: 'fully-up' | 'up' | 'down' | 'fully-down' | undefined
  inter?: (number | null) | undefined
  ktls?: 'on' | 'off' | undefined
  'log-bufsize'?: (number | null) | undefined
  log_proto?: 'legacy' | 'octet-count' | undefined
  maintenance?: 'enabled' | 'disabled' | undefined
  max_reuse?: (number | null) | undefined
  maxconn?: (number | null) | undefined
  maxqueue?: (number | null) | undefined
  minconn?: (number | null) | undefined
  namespace?: string | undefined
  no_sslv3?: 'enabled' | 'disabled' | undefined
  no_tlsv10?: 'enabled' | 'disabled' | undefined
  no_tlsv11?: 'enabled' | 'disabled' | undefined
  no_tlsv12?: 'enabled' | 'disabled' | undefined
  no_tlsv13?: 'enabled' | 'disabled' | undefined
  no_verifyhost?: 'enabled' | 'disabled' | undefined
  npn?: string | undefined
  observe?: 'layer4' | 'layer7' | undefined
  'on-error'?: 'fastinter' | 'fail-check' | 'sudden-death' | 'mark-down' | undefined
  'on-marked-down'?: 'shutdown-sessions' | undefined
  'on-marked-up'?: 'shutdown-backup-sessions' | undefined
  pool_conn_name?: string | undefined
  pool_low_conn?: (number | null) | undefined
  pool_max_conn?: (number | null) | undefined
  pool_purge_delay?: (number | null) | undefined
  proto?: string | undefined
  'proxy-v2-options'?:
    | (
        | 'authority'
        | 'cert-cn'
        | 'cert-key'
        | 'cert-sig'
        | 'crc32c'
        | 'ssl'
        | 'ssl-cipher'
        | 'unique-id'
      )[]
    | undefined
  'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
  quic_cc_algo_max_window?: (number | null) | undefined
  redir?: string | undefined
  renegotiate?: 'enabled' | 'disabled' | undefined
  'resolve-net'?: string | undefined
  'resolve-prefer'?: 'ipv4' | 'ipv6' | undefined
  resolve_opts?: string | undefined
  resolvers?: string | undefined
  rise?: (number | null) | undefined
  'send-proxy'?: 'enabled' | 'disabled' | undefined
  'send-proxy-v2'?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl_cn?: 'enabled' | 'disabled' | undefined
  'set-proxy-v2-tlv-fmt'?: { id: string; value: string } | undefined
  shard?: number | undefined
  sigalgs?: string | undefined
  slowstart?: (number | null) | undefined
  sni?: string | undefined
  sni_auto?: 'enabled' | 'disabled' | undefined
  socks4?: string | undefined
  source?: string | undefined
  ssl?: 'enabled' | 'disabled' | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_reuse?: 'enabled' | 'disabled' | undefined
  sslv3?: 'enabled' | 'disabled' | undefined
  stick?: 'enabled' | 'disabled' | undefined
  'strict-maxconn'?: boolean | undefined
  tcp_md5sig?: string | undefined
  tcp_ut?: (number | null) | undefined
  tfo?: 'enabled' | 'disabled' | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  tlsv10?: 'enabled' | 'disabled' | undefined
  tlsv11?: 'enabled' | 'disabled' | undefined
  tlsv12?: 'enabled' | 'disabled' | undefined
  tlsv13?: 'enabled' | 'disabled' | undefined
  track?: string | undefined
  verify?: 'none' | 'required' | undefined
  verifyhost?: string | undefined
  weight?: (number | null) | undefined
  ws?: 'auto' | 'h1' | 'h2' | undefined
  fqdn: string
  id?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  num_or_range: string
  port?: (number | null) | undefined
  prefix: string
}
type Server = {
  'agent-addr'?: string | undefined
  'agent-check'?: 'enabled' | 'disabled' | undefined
  'agent-inter'?: (number | null) | undefined
  'agent-port'?: (number | null) | undefined
  'agent-send'?: string | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backup?: 'enabled' | 'disabled' | undefined
  cc?: string | undefined
  check?: 'enabled' | 'disabled' | undefined
  'check-pool-conn-name'?: string | undefined
  'check-reuse-pool'?: 'enabled' | 'disabled' | undefined
  'check-send-proxy'?: 'enabled' | 'disabled' | undefined
  'check-sni'?: string | undefined
  'check-ssl'?: 'enabled' | 'disabled' | undefined
  check_alpn?: string | undefined
  check_proto?: string | undefined
  check_sni_auto?: 'enabled' | 'disabled' | undefined
  check_via_socks4?: 'enabled' | 'disabled' | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  cookie?: string | undefined
  crl_file?: string | undefined
  curves?: string | undefined
  downinter?: (number | null) | undefined
  error_limit?: number | undefined
  fall?: (number | null) | undefined
  fastinter?: (number | null) | undefined
  force_sslv3?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: 'enabled' | 'disabled' | undefined
  force_tlsv11?: 'enabled' | 'disabled' | undefined
  force_tlsv12?: 'enabled' | 'disabled' | undefined
  force_tlsv13?: 'enabled' | 'disabled' | undefined
  guid?: string | undefined
  hash_key?: string | undefined
  health_check_address?: string | undefined
  health_check_port?: (number | null) | undefined
  idle_ping?: (number | null) | undefined
  'init-addr'?: (string | null) | undefined
  'init-state'?: 'fully-up' | 'up' | 'down' | 'fully-down' | undefined
  inter?: (number | null) | undefined
  ktls?: 'on' | 'off' | undefined
  'log-bufsize'?: (number | null) | undefined
  log_proto?: 'legacy' | 'octet-count' | undefined
  maintenance?: 'enabled' | 'disabled' | undefined
  max_reuse?: (number | null) | undefined
  maxconn?: (number | null) | undefined
  maxqueue?: (number | null) | undefined
  minconn?: (number | null) | undefined
  namespace?: string | undefined
  no_sslv3?: 'enabled' | 'disabled' | undefined
  no_tlsv10?: 'enabled' | 'disabled' | undefined
  no_tlsv11?: 'enabled' | 'disabled' | undefined
  no_tlsv12?: 'enabled' | 'disabled' | undefined
  no_tlsv13?: 'enabled' | 'disabled' | undefined
  no_verifyhost?: 'enabled' | 'disabled' | undefined
  npn?: string | undefined
  observe?: 'layer4' | 'layer7' | undefined
  'on-error'?: 'fastinter' | 'fail-check' | 'sudden-death' | 'mark-down' | undefined
  'on-marked-down'?: 'shutdown-sessions' | undefined
  'on-marked-up'?: 'shutdown-backup-sessions' | undefined
  pool_conn_name?: string | undefined
  pool_low_conn?: (number | null) | undefined
  pool_max_conn?: (number | null) | undefined
  pool_purge_delay?: (number | null) | undefined
  proto?: string | undefined
  'proxy-v2-options'?:
    | (
        | 'authority'
        | 'cert-cn'
        | 'cert-key'
        | 'cert-sig'
        | 'crc32c'
        | 'ssl'
        | 'ssl-cipher'
        | 'unique-id'
      )[]
    | undefined
  'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
  quic_cc_algo_max_window?: (number | null) | undefined
  redir?: string | undefined
  renegotiate?: 'enabled' | 'disabled' | undefined
  'resolve-net'?: string | undefined
  'resolve-prefer'?: 'ipv4' | 'ipv6' | undefined
  resolve_opts?: string | undefined
  resolvers?: string | undefined
  rise?: (number | null) | undefined
  'send-proxy'?: 'enabled' | 'disabled' | undefined
  'send-proxy-v2'?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl_cn?: 'enabled' | 'disabled' | undefined
  'set-proxy-v2-tlv-fmt'?: { id: string; value: string } | undefined
  shard?: number | undefined
  sigalgs?: string | undefined
  slowstart?: (number | null) | undefined
  sni?: string | undefined
  sni_auto?: 'enabled' | 'disabled' | undefined
  socks4?: string | undefined
  source?: string | undefined
  ssl?: 'enabled' | 'disabled' | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_reuse?: 'enabled' | 'disabled' | undefined
  sslv3?: 'enabled' | 'disabled' | undefined
  stick?: 'enabled' | 'disabled' | undefined
  'strict-maxconn'?: boolean | undefined
  tcp_md5sig?: string | undefined
  tcp_ut?: (number | null) | undefined
  tfo?: 'enabled' | 'disabled' | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  tlsv10?: 'enabled' | 'disabled' | undefined
  tlsv11?: 'enabled' | 'disabled' | undefined
  tlsv12?: 'enabled' | 'disabled' | undefined
  tlsv13?: 'enabled' | 'disabled' | undefined
  track?: string | undefined
  verify?: 'none' | 'required' | undefined
  verifyhost?: string | undefined
  weight?: (number | null) | undefined
  ws?: 'auto' | 'h1' | 'h2' | undefined
  address: string
  id?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  port?: (number | null) | undefined
}
type StickRule = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  pattern: string
  table?: string | undefined
  type: 'match' | 'on' | 'store-request' | 'store-response'
}
type StickRules = StickRule[]
type TcpCheck = {
  action:
    | 'comment'
    | 'connect'
    | 'expect'
    | 'send'
    | 'send-lf'
    | 'send-binary'
    | 'send-binary-lf'
    | 'set-var'
    | 'set-var-fmt'
    | 'unset-var'
  addr?: string | undefined
  alpn?: string | undefined
  check_comment?: string | undefined
  data?: string | undefined
  default?: boolean | undefined
  error_status?: 'L7OKC' | 'L7RSP' | 'L7STS' | 'L6RSP' | 'L4CON' | undefined
  exclamation_mark?: boolean | undefined
  fmt?: string | undefined
  hex_fmt?: string | undefined
  hex_string?: string | undefined
  linger?: boolean | undefined
  match?: 'string' | 'rstring' | 'string-lf' | 'binary' | 'rbinary' | 'binary-lf' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  min_recv?: number | undefined
  ok_status?: 'L7OK' | 'L7OKC' | 'L6OK' | 'L4OK' | undefined
  on_error?: string | undefined
  on_success?: string | undefined
  pattern?: string | undefined
  port?: (number | null) | undefined
  port_string?: string | undefined
  proto?: string | undefined
  send_proxy?: boolean | undefined
  sni?: string | undefined
  ssl?: boolean | undefined
  'status-code'?: string | undefined
  tout_status?: 'L7TOUT' | 'L6TOUT' | 'L4TOUT' | undefined
  var_expr?: string | undefined
  var_fmt?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
  via_socks4?: boolean | undefined
}
type TcpChecks = TcpCheck[]
type TcpRequestRule = {
  action?:
    | 'accept'
    | 'attach-srv'
    | 'capture'
    | 'do-resolve'
    | 'expect-netscaler-cip'
    | 'expect-proxy'
    | 'lua'
    | 'reject'
    | 'sc-add-gpc'
    | 'sc-inc-gpc'
    | 'sc-inc-gpc0'
    | 'sc-inc-gpc1'
    | 'sc-set-gpt'
    | 'sc-set-gpt0'
    | 'send-spoe-group'
    | 'set-bandwidth-limit'
    | 'set-bc-mark'
    | 'set-bc-tos'
    | 'set-dst-port'
    | 'set-dst'
    | 'set-fc-mark'
    | 'set-fc-tos'
    | 'set-log-level'
    | 'set-mark'
    | 'set-nice'
    | 'set-priority-class'
    | 'set-priority-offset'
    | 'set-src'
    | 'set-src-port'
    | 'set-tos'
    | 'set-var'
    | 'set-var-fmt'
    | 'silent-drop'
    | 'switch-mode'
    | 'track-sc'
    | 'unset-var'
    | 'use-service'
    | 'set-retries'
    | 'do-log'
    | undefined
  bandwidth_limit_limit?: string | undefined
  bandwidth_limit_name?: string | undefined
  bandwidth_limit_period?: string | undefined
  capture_len?: number | undefined
  capture_sample?: string | undefined
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  expr?: string | undefined
  gpt_value?: string | undefined
  log_level?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | 'silent'
    | undefined
  log_profile?: string | undefined
  lua_action?: string | undefined
  lua_params?: string | undefined
  mark_value?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  nice_value?: number | undefined
  resolve_protocol?: 'ipv4' | 'ipv6' | undefined
  resolve_resolvers?: string | undefined
  resolve_var?: string | undefined
  rst_ttl?: number | undefined
  sc_idx?: string | undefined
  sc_inc_id?: string | undefined
  sc_int?: (number | null) | undefined
  server_name?: string | undefined
  service_name?: string | undefined
  spoe_engine_name?: string | undefined
  spoe_group_name?: string | undefined
  switch_mode_proto?: string | undefined
  timeout?: (number | null) | undefined
  tos_value?: string | undefined
  track_key?: string | undefined
  track_stick_counter?: (number | null) | undefined
  track_table?: string | undefined
  type: 'connection' | 'content' | 'inspect-delay' | 'session'
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
}
type TcpRequestRules = TcpRequestRule[]
type TcpResponseRule = {
  action?:
    | 'accept'
    | 'close'
    | 'lua'
    | 'reject'
    | 'sc-add-gpc'
    | 'sc-inc-gpc'
    | 'sc-inc-gpc0'
    | 'sc-inc-gpc1'
    | 'sc-set-gpt'
    | 'sc-set-gpt0'
    | 'send-spoe-group'
    | 'set-bandwidth-limit'
    | 'set-fc-mark'
    | 'set-fc-tos'
    | 'set-log-level'
    | 'set-mark'
    | 'set-nice'
    | 'set-tos'
    | 'set-var'
    | 'set-var-fmt'
    | 'silent-drop'
    | 'unset-var'
    | 'do-log'
    | undefined
  bandwidth_limit_limit?: string | undefined
  bandwidth_limit_name?: string | undefined
  bandwidth_limit_period?: string | undefined
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  expr?: string | undefined
  log_level?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | 'silent'
    | undefined
  log_profile?: string | undefined
  lua_action?: string | undefined
  lua_params?: string | undefined
  mark_value?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  nice_value?: number | undefined
  rst_ttl?: number | undefined
  sc_expr?: string | undefined
  sc_id?: number | undefined
  sc_idx?: number | undefined
  sc_int?: (number | null) | undefined
  spoe_engine?: string | undefined
  spoe_group?: string | undefined
  timeout?: (number | null) | undefined
  tos_value?: string | undefined
  type: 'content' | 'inspect-delay'
  var_format?: string | undefined
  var_name?: string | undefined
  var_scope?: string | undefined
}
type TcpResponseRules = TcpResponseRule[]
type Backend = {
  abortonclose?: 'enabled' | 'disabled' | undefined
  accept_invalid_http_response?: 'enabled' | 'disabled' | undefined
  accept_unsafe_violations_in_http_response?: 'enabled' | 'disabled' | undefined
  adv_check?:
    | 'httpchk'
    | 'ldap-check'
    | 'mysql-check'
    | 'pgsql-check'
    | 'redis-check'
    | 'smtpchk'
    | 'ssl-hello-chk'
    | 'tcp-check'
    | undefined
  allbackups?: 'enabled' | 'disabled' | undefined
  balance?: Balance | undefined
  check_timeout?: (number | null) | undefined
  checkcache?: 'enabled' | 'disabled' | undefined
  compression?: Compression | undefined
  connect_timeout?: (number | null) | undefined
  cookie?: Cookie | undefined
  default_server?: DefaultServer | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  dynamic_cookie_key?: string | undefined
  email_alert?: EmailAlert | undefined
  enabled?: boolean | undefined
  error_files?: Errorfile[] | undefined
  errorfiles_from_http_errors?: Errorfiles[] | undefined
  errorloc302?: Errorloc | undefined
  errorloc303?: Errorloc | undefined
  external_check?: 'enabled' | 'disabled' | undefined
  external_check_command?: string | undefined
  external_check_path?: string | undefined
  force_persist?: { cond: 'if' | 'unless'; cond_test: string } | undefined
  force_persist_list?: { cond: 'if' | 'unless'; cond_test: string }[] | undefined
  forwarded?: Forwarded | undefined
  forwardfor?: Forwardfor | undefined
  from?: string | undefined
  fullconn?: (number | null) | undefined
  guid?: string | undefined
  h1_case_adjust_bogus_server?: 'enabled' | 'disabled' | undefined
  hash_balance_factor?: (number | null) | undefined
  hash_preserve_affinity?: 'always' | 'maxconn' | 'maxqueue' | undefined
  hash_type?: HashType | undefined
  'http-buffer-request'?: 'enabled' | 'disabled' | undefined
  'http-drop-request-trailers'?: 'enabled' | 'disabled' | undefined
  'http-no-delay'?: 'enabled' | 'disabled' | undefined
  http_connection_mode?: 'httpclose' | 'http-server-close' | 'http-keep-alive' | undefined
  http_keep_alive_timeout?: (number | null) | undefined
  http_pretend_keepalive?: 'enabled' | 'disabled' | undefined
  http_request_timeout?: (number | null) | undefined
  http_restrict_req_hdr_names?: 'preserve' | 'delete' | 'reject' | undefined
  http_reuse?: 'aggressive' | 'always' | 'never' | 'safe' | undefined
  http_send_name_header?: (string | null) | undefined
  httpchk_params?: HttpchkParams | undefined
  id?: (number | null) | undefined
  ignore_persist?: { cond: 'if' | 'unless'; cond_test: string } | undefined
  ignore_persist_list?: { cond: 'if' | 'unless'; cond_test: string }[] | undefined
  independent_streams?: 'enabled' | 'disabled' | undefined
  load_server_state_from_file?: 'global' | 'local' | 'none' | undefined
  log_health_checks?: 'enabled' | 'disabled' | undefined
  log_tag?: string | undefined
  max_keep_alive_queue?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  mode?: 'http' | 'tcp' | 'log' | undefined
  mysql_check_params?: MysqlCheckParams | undefined
  name: string
  nolinger?: 'enabled' | 'disabled' | undefined
  originalto?: Originalto | undefined
  persist?: 'enabled' | 'disabled' | undefined
  persist_rule?: PersistRule | undefined
  pgsql_check_params?: PgsqlCheckParams | undefined
  prefer_last_server?: 'enabled' | 'disabled' | undefined
  queue_timeout?: (number | null) | undefined
  redispatch?: Redispatch | undefined
  retries?: (number | null) | undefined
  retry_on?: string | undefined
  server_fin_timeout?: (number | null) | undefined
  server_state_file_name?: string | undefined
  server_timeout?: (number | null) | undefined
  smtpchk_params?: SmtpchkParams | undefined
  source?: Source | undefined
  splice_auto?: 'enabled' | 'disabled' | undefined
  splice_request?: 'enabled' | 'disabled' | undefined
  splice_response?: 'enabled' | 'disabled' | undefined
  spop_check?: 'enabled' | 'disabled' | undefined
  srvtcpka?: 'enabled' | 'disabled' | undefined
  srvtcpka_cnt?: (number | null) | undefined
  srvtcpka_idle?: (number | null) | undefined
  srvtcpka_intvl?: (number | null) | undefined
  stats_options?: StatsOptions | undefined
  stick_table?: ConfigStickTable | undefined
  tarpit_timeout?: (number | null) | undefined
  tcp_smart_connect?: 'enabled' | 'disabled' | undefined
  tcpka?: 'enabled' | 'disabled' | undefined
  transparent?: 'enabled' | 'disabled' | undefined
  tunnel_timeout?: (number | null) | undefined
  use_fcgi_app?: string | undefined
  use_small_buffers?: UseSmallBuffers | undefined
  acl_list?: Acls | undefined
  filter_list?: Filters | undefined
  http_after_response_rule_list?: HttpAfterResponseRules | undefined
  http_check_list?: HttpChecks | undefined
  http_error_rule_list?: HttpErrorRules | undefined
  http_request_rule_list?: HttpRequestRules | undefined
  http_response_rule_list?: HttpResponseRules | undefined
  log_target_list?: LogTargets | undefined
  server_switching_rule_list?: ServerSwitchingRules | undefined
  server_templates?: { [x: string]: ServerTemplate } | undefined
  servers?: { [x: string]: Server } | undefined
  stick_rule_list?: StickRules | undefined
  tcp_check_rule_list?: TcpChecks | undefined
  tcp_request_rule_list?: TcpRequestRules | undefined
  tcp_response_rule_list?: TcpResponseRules | undefined
}
type Backends = Backend[]
type ServerTemplates = ServerTemplate[]
type Servers = Server[]
type Cache = {
  max_age?: number | undefined
  max_object_size?: number | undefined
  max_secondary_entries?: number | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  process_vary?: (boolean | null) | undefined
  total_max_size?: number | undefined
}
type Caches = Cache[]
type CrtLoad = {
  acme?: string | undefined
  alias?: string | undefined
  bits?: (number | null) | undefined
  certificate: string
  curves?: string | undefined
  domains?: string[] | undefined
  generate_dummy?: 'enabled' | 'disabled' | undefined
  ips?: string[] | undefined
  issuer?: string | undefined
  jwt?: 'enabled' | 'disabled' | undefined
  key?: string | undefined
  keytype?: 'RSA' | 'ECDSA' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  ocsp?: string | undefined
  ocsp_update?: 'enabled' | 'disabled' | undefined
  sctl?: string | undefined
}
type CrtStore = {
  crt_base?: string | undefined
  key_base?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  crt_loads?: { [x: string]: CrtLoad } | undefined
}
type CrtStores = CrtStore[]
type CrtLoads = CrtLoad[]
type MonitorUri = string
type QuicInitialRule = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  log_profile?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  type: 'reject' | 'accept' | 'send-retry' | 'dgram-drop' | 'do-log'
}
type QuicInitialRules = QuicInitialRule[]
type Defaults = {
  abortonclose?: 'enabled' | 'disabled' | undefined
  accept_invalid_http_request?: 'enabled' | 'disabled' | undefined
  accept_invalid_http_response?: 'enabled' | 'disabled' | undefined
  accept_unsafe_violations_in_http_request?: 'enabled' | 'disabled' | undefined
  accept_unsafe_violations_in_http_response?: 'enabled' | 'disabled' | undefined
  adv_check?:
    | 'httpchk'
    | 'ldap-check'
    | 'mysql-check'
    | 'pgsql-check'
    | 'redis-check'
    | 'smtpchk'
    | 'ssl-hello-chk'
    | 'tcp-check'
    | undefined
  allbackups?: 'enabled' | 'disabled' | undefined
  backlog?: (number | null) | undefined
  balance?: Balance | undefined
  check_timeout?: (number | null) | undefined
  checkcache?: 'enabled' | 'disabled' | undefined
  clflog?: boolean | undefined
  client_fin_timeout?: (number | null) | undefined
  client_hs_timeout?: (number | null) | undefined
  client_timeout?: (number | null) | undefined
  clitcpka?: 'enabled' | 'disabled' | undefined
  clitcpka_cnt?: (number | null) | undefined
  clitcpka_idle?: (number | null) | undefined
  clitcpka_intvl?: (number | null) | undefined
  compression?: Compression | undefined
  connect_timeout?: (number | null) | undefined
  contstats?: 'enabled' | undefined
  cookie?: Cookie | undefined
  default_backend?: string | undefined
  default_server?: DefaultServer | undefined
  disable_h2_upgrade?: 'enabled' | 'disabled' | undefined
  disabled?: boolean | undefined
  dontlog_normal?: 'enabled' | 'disabled' | undefined
  dontlognull?: 'enabled' | 'disabled' | undefined
  dynamic_cookie_key?: string | undefined
  email_alert?: EmailAlert | undefined
  enabled?: boolean | undefined
  error_files?: Errorfile[] | undefined
  error_log_format?: string | undefined
  errorfiles_from_http_errors?: Errorfiles[] | undefined
  errorloc302?: Errorloc | undefined
  errorloc303?: Errorloc | undefined
  external_check?: 'enabled' | 'disabled' | undefined
  external_check_command?: string | undefined
  external_check_path?: string | undefined
  forwarded?: Forwarded | undefined
  forwardfor?: Forwardfor | undefined
  from?: string | undefined
  fullconn?: (number | null) | undefined
  h1_case_adjust_bogus_client?: 'enabled' | 'disabled' | undefined
  h1_case_adjust_bogus_server?: 'enabled' | 'disabled' | undefined
  hash_balance_factor?: (number | null) | undefined
  hash_preserve_affinity?: 'always' | 'maxconn' | 'maxqueue' | undefined
  hash_type?: HashType | undefined
  'http-buffer-request'?: 'enabled' | 'disabled' | undefined
  'http-drop-request-trailers'?: 'enabled' | 'disabled' | undefined
  'http-drop-response-trailers'?: 'enabled' | 'disabled' | undefined
  http_connection_mode?: 'httpclose' | 'http-server-close' | 'http-keep-alive' | undefined
  http_ignore_probes?: 'enabled' | 'disabled' | undefined
  http_keep_alive_timeout?: (number | null) | undefined
  http_no_delay?: 'enabled' | 'disabled' | undefined
  http_pretend_keepalive?: 'enabled' | 'disabled' | undefined
  http_request_timeout?: (number | null) | undefined
  http_restrict_req_hdr_names?: 'preserve' | 'delete' | 'reject' | undefined
  http_reuse?: 'aggressive' | 'always' | 'never' | 'safe' | undefined
  http_send_name_header?: (string | null) | undefined
  http_use_proxy_header?: 'enabled' | 'disabled' | undefined
  httpchk_params?: HttpchkParams | undefined
  httplog?: boolean | undefined
  httpslog?: 'enabled' | 'disabled' | undefined
  idle_close_on_response?: 'enabled' | 'disabled' | undefined
  independent_streams?: 'enabled' | 'disabled' | undefined
  load_server_state_from_file?: 'global' | 'local' | 'none' | undefined
  log_format?: string | undefined
  log_format_sd?: string | undefined
  log_health_checks?: 'enabled' | 'disabled' | undefined
  log_separate_errors?: 'enabled' | 'disabled' | undefined
  log_steps?:
    | ('accept' | 'request' | 'connect' | 'response' | 'close' | 'error' | 'any')[]
    | undefined
  log_tag?: string | undefined
  logasap?: 'enabled' | 'disabled' | undefined
  max_keep_alive_queue?: (number | null) | undefined
  max_session_srv_conns?: (number | null) | undefined
  maxconn?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  mode?: 'tcp' | 'http' | 'log' | undefined
  monitor_uri?: MonitorUri | undefined
  mysql_check_params?: MysqlCheckParams | undefined
  name: string
  nolinger?: 'enabled' | 'disabled' | undefined
  originalto?: Originalto | undefined
  persist?: 'enabled' | 'disabled' | undefined
  persist_rule?: PersistRule | undefined
  pgsql_check_params?: PgsqlCheckParams | undefined
  prefer_last_server?: 'enabled' | 'disabled' | undefined
  queue_timeout?: (number | null) | undefined
  rate_limit_sessions?: (number | null) | undefined
  redispatch?: Redispatch | undefined
  retries?: (number | null) | undefined
  retry_on?: string | undefined
  server_fin_timeout?: (number | null) | undefined
  server_timeout?: (number | null) | undefined
  smtpchk_params?: SmtpchkParams | undefined
  socket_stats?: 'enabled' | 'disabled' | undefined
  source?: Source | undefined
  splice_auto?: 'enabled' | 'disabled' | undefined
  splice_request?: 'enabled' | 'disabled' | undefined
  splice_response?: 'enabled' | 'disabled' | undefined
  spop_check?: 'enabled' | 'disabled' | undefined
  srvtcpka?: 'enabled' | 'disabled' | undefined
  srvtcpka_cnt?: (number | null) | undefined
  srvtcpka_idle?: (number | null) | undefined
  srvtcpka_intvl?: (number | null) | undefined
  stats_options?: StatsOptions | undefined
  tarpit_timeout?: (number | null) | undefined
  tcp_clflog?: boolean | undefined
  tcp_smart_accept?: 'enabled' | 'disabled' | undefined
  tcp_smart_connect?: 'enabled' | 'disabled' | undefined
  tcpka?: 'enabled' | 'disabled' | undefined
  tcplog?: boolean | undefined
  transparent?: 'enabled' | 'disabled' | undefined
  tunnel_timeout?: (number | null) | undefined
  unique_id_format?: string | undefined
  unique_id_header?: string | undefined
  use_small_buffers?: UseSmallBuffers | undefined
  acl_list?: Acls | undefined
  http_after_response_rule_list?: HttpAfterResponseRules | undefined
  http_check_list?: HttpChecks | undefined
  http_error_rule_list?: HttpErrorRules | undefined
  http_request_rule_list?: HttpRequestRules | undefined
  http_response_rule_list?: HttpResponseRules | undefined
  log_target_list?: LogTargets | undefined
  quic_initial_rule_list?: QuicInitialRules | undefined
  tcp_check_rule_list?: TcpChecks | undefined
  tcp_request_rule_list?: TcpRequestRules | undefined
  tcp_response_rule_list?: TcpResponseRules | undefined
}
type DefaultsSections = Defaults[]
type FcgiLogStderr = {
  address?: string | undefined
  facility?: string | undefined
  format?: string | undefined
  global?: boolean | undefined
  len?: number | undefined
  level?: string | undefined
  minlevel?: string | undefined
  sample?: { ranges: string; size: number } | undefined
}
type FcgiPassHeader = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  name?: string | undefined
}
type FcgiSetParam = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  format?: string | undefined
  name?: string | undefined
}
type FcgiApp = {
  docroot: string
  get_values?: 'enabled' | 'disabled' | undefined
  index?: string | undefined
  keep_conn?: 'enabled' | 'disabled' | undefined
  log_stderrs?: FcgiLogStderr[] | undefined
  max_reqs?: number | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  mpxs_conns?: 'enabled' | 'disabled' | undefined
  name: string
  pass_headers?: FcgiPassHeader[] | undefined
  path_info?: string | undefined
  set_params?: FcgiSetParam[] | undefined
  acl_list?: Acls | undefined
}
type FcgiApps = FcgiApp[]
type MonitorFail = { cond: 'if' | 'unless'; cond_test: string }
type BackendSwitchingRule = {
  cond?: 'if' | 'unless' | undefined
  cond_test?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
}
type BackendSwitchingRules = BackendSwitchingRule[]
type Bind = {
  accept_netscaler_cip?: number | undefined
  accept_proxy?: boolean | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backlog?: string | undefined
  ca_ignore_err?: string | undefined
  ca_sign_file?: string | undefined
  ca_sign_pass?: string | undefined
  ca_verify_file?: string | undefined
  cc?: string | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  crl_file?: string | undefined
  crt_ignore_err?: string | undefined
  crt_list?: string | undefined
  curves?: string | undefined
  default_crt_list?: string[] | undefined
  defer_accept?: boolean | undefined
  ecdhe?: string | undefined
  expose_fd_listeners?: boolean | undefined
  force_sslv3?: boolean | undefined
  force_strict_sni?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: boolean | undefined
  force_tlsv11?: boolean | undefined
  force_tlsv12?: boolean | undefined
  force_tlsv13?: boolean | undefined
  generate_certificates?: boolean | undefined
  gid?: number | undefined
  group?: string | undefined
  guid_prefix?: string | undefined
  id?: string | undefined
  idle_ping?: (number | null) | undefined
  interface?: string | undefined
  ktls?: 'on' | 'off' | undefined
  label?: string | undefined
  level?: 'user' | 'operator' | 'admin' | undefined
  maxconn?: number | undefined
  mode?: string | undefined
  mss?: string | undefined
  namespace?: string | undefined
  nbconn?: number | undefined
  nice?: number | undefined
  no_alpn?: boolean | undefined
  no_ca_names?: boolean | undefined
  no_sslv3?: boolean | undefined
  no_strict_sni?: boolean | undefined
  no_tls_tickets?: boolean | undefined
  no_tlsv10?: boolean | undefined
  no_tlsv11?: boolean | undefined
  no_tlsv12?: boolean | undefined
  no_tlsv13?: boolean | undefined
  npn?: string | undefined
  prefer_client_ciphers?: boolean | undefined
  proto?: string | undefined
  'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
  'quic-force-retry'?: boolean | undefined
  'quic-socket'?: 'connection' | 'listener' | undefined
  quic_cc_algo_burst_size?: (number | null) | undefined
  quic_cc_algo_max_window?: (number | null) | undefined
  severity_output?: 'none' | 'number' | 'string' | undefined
  shards?: string | undefined
  sigalgs?: string | undefined
  ssl?: boolean | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  sslv3?: 'enabled' | 'disabled' | undefined
  strict_sni?: boolean | undefined
  tcp_md5sig?: string | undefined
  tcp_ss?: 1 | 2 | 3 | undefined
  tcp_user_timeout?: (number | null) | undefined
  tfo?: boolean | undefined
  thread?: string | undefined
  tls_ticket_keys?: string | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  tlsv10?: 'enabled' | 'disabled' | undefined
  tlsv11?: 'enabled' | 'disabled' | undefined
  tlsv12?: 'enabled' | 'disabled' | undefined
  tlsv13?: 'enabled' | 'disabled' | undefined
  transparent?: boolean | undefined
  uid?: string | undefined
  user?: string | undefined
  v4v6?: boolean | undefined
  v6only?: boolean | undefined
  verify?: 'none' | 'optional' | 'required' | undefined
  address?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  port?: (number | null) | undefined
  'port-range-end'?: (number | null) | undefined
}
type Capture = {
  length: number
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  type: 'request' | 'response'
}
type Captures = Capture[]
type ForceBeSwitch = {
  cond: 'if' | 'unless'
  cond_test: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ForceBeSwitches = ForceBeSwitch[]
type SslFrontUse = {
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  ca_file?: string | undefined
  certificate: string
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  crl_file?: string | undefined
  curves?: string | undefined
  ecdhe?: string | undefined
  issuer?: string | undefined
  key?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  no_alpn?: boolean | undefined
  no_ca_names?: boolean | undefined
  npn?: string | undefined
  ocsp?: string | undefined
  ocsp_update?: 'enabled' | 'disabled' | undefined
  sctl?: string | undefined
  sigalgs?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  verify?: 'none' | 'optional' | 'required' | undefined
}
type SslFrontUses = SslFrontUse[]
type Frontend = {
  abortonclose?: 'enabled' | 'disabled' | undefined
  accept_invalid_http_request?: 'enabled' | 'disabled' | undefined
  accept_unsafe_violations_in_http_request?: 'enabled' | 'disabled' | undefined
  backlog?: (number | null) | undefined
  clflog?: boolean | undefined
  client_fin_timeout?: (number | null) | undefined
  client_hs_timeout?: (number | null) | undefined
  client_timeout?: (number | null) | undefined
  clitcpka?: 'enabled' | 'disabled' | undefined
  clitcpka_cnt?: (number | null) | undefined
  clitcpka_idle?: (number | null) | undefined
  clitcpka_intvl?: (number | null) | undefined
  compression?: Compression | undefined
  contstats?: 'enabled' | undefined
  default_backend?: string | undefined
  description?: string | undefined
  disable_h2_upgrade?: 'enabled' | 'disabled' | undefined
  disabled?: boolean | undefined
  dontlog_normal?: 'enabled' | 'disabled' | undefined
  dontlognull?: 'enabled' | 'disabled' | undefined
  email_alert?: EmailAlert | undefined
  enabled?: boolean | undefined
  error_files?: Errorfile[] | undefined
  error_log_format?: string | undefined
  errorfiles_from_http_errors?: Errorfiles[] | undefined
  errorloc302?: Errorloc | undefined
  errorloc303?: Errorloc | undefined
  forwarded?: Forwarded | undefined
  forwardfor?: Forwardfor | undefined
  from?: string | undefined
  guid?: string | undefined
  h1_case_adjust_bogus_client?: 'enabled' | 'disabled' | undefined
  'http-buffer-request'?: 'enabled' | 'disabled' | undefined
  'http-drop-response-trailers'?: 'enabled' | 'disabled' | undefined
  http_connection_mode?: 'httpclose' | 'http-server-close' | 'http-keep-alive' | undefined
  http_ignore_probes?: 'enabled' | 'disabled' | undefined
  http_keep_alive_timeout?: (number | null) | undefined
  http_no_delay?: 'enabled' | 'disabled' | undefined
  http_request_timeout?: (number | null) | undefined
  http_restrict_req_hdr_names?: 'preserve' | 'delete' | 'reject' | undefined
  http_use_proxy_header?: 'enabled' | 'disabled' | undefined
  httplog?: boolean | undefined
  httpslog?: 'enabled' | 'disabled' | undefined
  id?: (number | null) | undefined
  idle_close_on_response?: 'enabled' | 'disabled' | undefined
  independent_streams?: 'enabled' | 'disabled' | undefined
  log_format?: string | undefined
  log_format_sd?: string | undefined
  log_separate_errors?: 'enabled' | 'disabled' | undefined
  log_steps?:
    | ('accept' | 'request' | 'connect' | 'response' | 'close' | 'error' | 'any')[]
    | undefined
  log_tag?: string | undefined
  logasap?: 'enabled' | 'disabled' | undefined
  max_session_srv_conns?: (number | null) | undefined
  maxconn?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  mode?: 'http' | 'tcp' | undefined
  monitor_fail?: MonitorFail | undefined
  monitor_uri?: MonitorUri | undefined
  name: string
  nolinger?: 'enabled' | 'disabled' | undefined
  originalto?: Originalto | undefined
  rate_limit_sessions?: (number | null) | undefined
  socket_stats?: 'enabled' | 'disabled' | undefined
  splice_auto?: 'enabled' | 'disabled' | undefined
  splice_request?: 'enabled' | 'disabled' | undefined
  splice_response?: 'enabled' | 'disabled' | undefined
  stats_options?: StatsOptions | undefined
  stick_table?: ConfigStickTable | undefined
  tarpit_timeout?: (number | null) | undefined
  tcp_clflog?: boolean | undefined
  tcp_smart_accept?: 'enabled' | 'disabled' | undefined
  tcpka?: 'enabled' | 'disabled' | undefined
  tcplog?: boolean | undefined
  unique_id_format?: string | undefined
  unique_id_header?: string | undefined
  acl_list?: Acls | undefined
  backend_switching_rule_list?: BackendSwitchingRules | undefined
  binds?: { [x: string]: Bind } | undefined
  capture_list?: Captures | undefined
  filter_list?: Filters | undefined
  force_be_switch_list?: ForceBeSwitches | undefined
  http_after_response_rule_list?: HttpAfterResponseRules | undefined
  http_error_rule_list?: HttpErrorRules | undefined
  http_request_rule_list?: HttpRequestRules | undefined
  http_response_rule_list?: HttpResponseRules | undefined
  log_target_list?: LogTargets | undefined
  quic_initial_rule_list?: QuicInitialRules | undefined
  ssl_front_use_list?: SslFrontUses | undefined
  tcp_request_rule_list?: TcpRequestRules | undefined
}
type Frontends = Frontend[]
type Binds = Bind[]
type DebugOptions = {
  anonkey?: (number | null) | undefined
  counters?: 'enabled' | 'disabled' | undefined
  quick_exit?: boolean | undefined
  quiet?: boolean | undefined
  stress_level?: (number | null) | undefined
  zero_warning?: boolean | undefined
}
type DeviceAtlasOptions = {
  json_file?: string | undefined
  log_level?: string | undefined
  properties_cookie?: string | undefined
  separator?: string | undefined
}
type EnvironmentOptions = {
  presetenv?: { name: string; value: string }[] | undefined
  resetenv?: string | undefined
  setenv?: { name: string; value: string }[] | undefined
  unsetenv?: string | undefined
}
type FiftyOneDegreesOptions = {
  cache_size?: number | undefined
  data_file?: string | undefined
  property_name_list?: string | undefined
  property_separator?: string | undefined
}
type HttpClientOptions = {
  resolvers_disabled?: 'enabled' | 'disabled' | undefined
  resolvers_id?: string | undefined
  resolvers_prefer?: 'ipv4' | 'ipv6' | undefined
  retries?: number | undefined
  ssl_ca_file?: string | undefined
  ssl_verify?: '' | 'none' | 'required' | undefined
  timeout_connect?: (number | null) | undefined
}
type HttpCodes = { value: string }
type JwtOptions = {
  allow_none_alg?: boolean | undefined
  decrypt_alg_list?: string | undefined
  decrypt_enc_list?: string | undefined
}
type LuaOptions = {
  load_per_thread?: string | undefined
  loads?: { file: string }[] | undefined
  prepend_path?: { path: string; type?: 'path' | 'cpath' | undefined }[] | undefined
}
type OcspUpdateOptions = {
  disable?: (boolean | null) | undefined
  httpproxy?: { address?: string | undefined; port?: (number | null) | undefined } | undefined
  maxdelay?: (number | null) | undefined
  mindelay?: (number | null) | undefined
  mode?: 'enabled' | 'disabled' | undefined
}
type PerformanceOptions = {
  busy_polling?: boolean | undefined
  fd_hard_limit?: (number | null) | undefined
  max_spread_checks?: (number | null) | undefined
  maxcompcpuusage?: number | undefined
  maxcomprate?: number | undefined
  maxconn?: number | undefined
  maxconnrate?: number | undefined
  maxpipes?: number | undefined
  maxsessrate?: number | undefined
  maxzlibmem?: number | undefined
  no_memory_trimming?: boolean | undefined
  noepoll?: boolean | undefined
  noevports?: boolean | undefined
  nogetaddrinfo?: boolean | undefined
  nokqueue?: boolean | undefined
  noktls?: boolean | undefined
  nopoll?: boolean | undefined
  noreuseport?: boolean | undefined
  nosplice?: boolean | undefined
  profiling_memory?: 'enabled' | 'disabled' | undefined
  profiling_tasks?: 'auto' | 'enabled' | 'disabled' | undefined
  server_state_base?: string | undefined
  server_state_file?: string | undefined
  spread_checks?: number | undefined
  thread_hard_limit?: (number | null) | undefined
}
type SslOptions = {
  acme_scheduler?: 'auto' | 'off' | undefined
  ca_base?: string | undefined
  crt_base?: string | undefined
  default_bind_ciphers?: string | undefined
  default_bind_ciphersuites?: string | undefined
  default_bind_client_sigalgs?: string | undefined
  default_bind_curves?: string | undefined
  default_bind_options?: string | undefined
  default_bind_sigalgs?: string | undefined
  default_server_ciphers?: string | undefined
  default_server_ciphersuites?: string | undefined
  default_server_client_sigalgs?: string | undefined
  default_server_curves?: string | undefined
  default_server_options?: string | undefined
  default_server_sigalgs?: string | undefined
  dh_param_file?: string | undefined
  engines?: { algorithms?: (string | null) | undefined; name: string }[] | undefined
  issuers_chain_path?: string | undefined
  key_base?: string | undefined
  load_extra_del_ext?: boolean | undefined
  load_extra_files?: string | undefined
  maxsslconn?: number | undefined
  maxsslrate?: number | undefined
  mode_async?: 'enabled' | 'disabled' | undefined
  passphrase_cmd?: string | undefined
  propquery?: string | undefined
  provider?: string | undefined
  provider_path?: string | undefined
  security_level?: (number | null) | undefined
  server_verify?: 'none' | 'required' | undefined
  skip_self_issued_ca?: boolean | undefined
}
type TuneBufferOptions = {
  buffers_limit?: (number | null) | undefined
  buffers_reserve?: number | undefined
  bufsize?: number | undefined
  bufsize_large?: (number | null) | undefined
  bufsize_small?: (number | null) | undefined
  pipesize?: number | undefined
  rcvbuf_backend?: (number | null) | undefined
  rcvbuf_client?: (number | null) | undefined
  rcvbuf_frontend?: (number | null) | undefined
  rcvbuf_server?: (number | null) | undefined
  recv_enough?: number | undefined
  sndbuf_backend?: (number | null) | undefined
  sndbuf_client?: (number | null) | undefined
  sndbuf_frontend?: (number | null) | undefined
  sndbuf_server?: (number | null) | undefined
}
type TuneLuaOptions = {
  bool_sample_conversion?: 'normal' | 'pre-3.1-bug' | undefined
  burst_timeout?: (number | null) | undefined
  forced_yield?: number | undefined
  log_loggers?: 'enabled' | 'disabled' | undefined
  log_stderr?: 'auto' | 'enabled' | 'disabled' | undefined
  maxmem?: (number | null) | undefined
  openlibs?: string | undefined
  service_timeout?: (number | null) | undefined
  session_timeout?: (number | null) | undefined
  task_timeout?: (number | null) | undefined
}
type TuneOptions = {
  applet_zero_copy_forwarding?: 'enabled' | 'disabled' | undefined
  cli_max_payload_size?: (number | null) | undefined
  comp_maxlevel?: number | undefined
  defaults_purge?: boolean | undefined
  disable_fast_forward?: boolean | undefined
  disable_zero_copy_forwarding?: boolean | undefined
  epoll_mask_events?: ('err' | 'hup' | 'rdhup')[] | undefined
  events_max_events_at_once?: number | undefined
  fail_alloc?: boolean | undefined
  fd_edge_triggered?: 'enabled' | 'disabled' | undefined
  glitches_kill_cpu_usage?: (number | null) | undefined
  h1_be_glitches_threshold?: number | undefined
  h1_fe_glitches_threshold?: number | undefined
  h1_zero_copy_fwd_recv?: 'enabled' | 'disabled' | undefined
  h1_zero_copy_fwd_send?: 'enabled' | 'disabled' | undefined
  h2_be_glitches_threshold?: (number | null) | undefined
  h2_be_initial_window_size?: number | undefined
  h2_be_max_concurrent_streams?: number | undefined
  h2_be_max_frames_at_once?: number | undefined
  h2_be_rxbuf?: (number | null) | undefined
  h2_fe_glitches_threshold?: (number | null) | undefined
  h2_fe_initial_window_size?: number | undefined
  h2_fe_max_concurrent_streams?: number | undefined
  h2_fe_max_frames_at_once?: number | undefined
  h2_fe_max_rst_at_once?: number | undefined
  h2_fe_max_total_streams?: (number | null) | undefined
  h2_fe_rxbuf?: (number | null) | undefined
  h2_header_table_size?: number | undefined
  h2_initial_window_size?: (number | null) | undefined
  h2_log_errors?: 'none' | 'connection' | 'stream' | undefined
  h2_max_concurrent_streams?: number | undefined
  h2_max_frame_size?: number | undefined
  h2_zero_copy_fwd_send?: 'enabled' | 'disabled' | undefined
  http_cookielen?: number | undefined
  http_logurilen?: number | undefined
  http_maxhdr?: number | undefined
  idle_pool_shared?: 'enabled' | 'disabled' | 'full' | undefined
  idletimer?: (number | null) | undefined
  listener_default_shards?: 'by-process' | 'by-thread' | 'by-group' | undefined
  listener_multi_queue?: 'enabled' | 'disabled' | undefined
  max_checks_per_thread?: (number | null) | undefined
  max_rules_at_once?: (number | null) | undefined
  maxaccept?: number | undefined
  maxpollevents?: number | undefined
  maxrewrite?: number | undefined
  memory_hot_size?: (number | null) | undefined
  notsent_lowat_client?: (number | null) | undefined
  notsent_lowat_server?: (number | null) | undefined
  pattern_cache_size?: (number | null) | undefined
  peers_max_updates_at_once?: number | undefined
  pool_high_fd_ratio?: number | undefined
  pool_low_fd_ratio?: number | undefined
  pt_zero_copy_forwarding?: 'enabled' | 'disabled' | undefined
  renice_runtime?: (number | null) | undefined
  renice_startup?: (number | null) | undefined
  ring_queues?: (number | null) | undefined
  runqueue_depth?: number | undefined
  sched_low_latency?: 'enabled' | 'disabled' | undefined
  stick_counters?: (number | null) | undefined
  streams_elasticity?: (number | null) | undefined
  takeover_other_tg_connections?: 'none' | 'restricted' | 'full' | undefined
}
type TuneQuicOptions = {
  frontend_max_idle_timeout?: (number | null) | undefined
  frontend_max_streams_bidi?: (number | null) | undefined
  frontend_max_tx_memory?: (number | null) | undefined
  frontend_stream_max_total?: (number | null) | undefined
  max_frame_loss?: (number | null) | undefined
  reorder_ratio?: (number | null) | undefined
  retry_threshold?: (number | null) | undefined
  socket_owner?: 'listener' | 'connection' | undefined
  zero_copy_fwd_send?: 'enabled' | 'disabled' | undefined
}
type TuneSslOptions = {
  cachesize?: (number | null) | undefined
  capture_buffer_size?: (number | null) | undefined
  certificate_compression?: 'auto' | 'disabled' | undefined
  ctx_cache_size?: number | undefined
  default_dh_param?: number | undefined
  force_private_cache?: boolean | undefined
  hard_maxrecord?: (number | null) | undefined
  keylog?: 'enabled' | 'disabled' | undefined
  lifetime?: (number | null) | undefined
  maxrecord?: (number | null) | undefined
  ocsp_update_max_delay?: (number | null) | undefined
  ocsp_update_min_delay?: (number | null) | undefined
}
type TuneVarsOptions = {
  global_max_size?: (number | null) | undefined
  proc_max_size?: (number | null) | undefined
  reqres_max_size?: (number | null) | undefined
  sess_max_size?: (number | null) | undefined
  txn_max_size?: (number | null) | undefined
}
type TuneZlibOptions = { memlevel?: number | undefined; windowsize?: number | undefined }
type WurflOptions = {
  cache_size?: number | undefined
  data_file?: string | undefined
  information_list?: string | undefined
  information_list_separator?: string | undefined
  patch_file?: string | undefined
}
type Global = {
  chroot?: string | undefined
  close_spread_time?: (number | null) | undefined
  cluster_secret?: string | undefined
  cpu_affinity?:
    | {
        affinity: 'per-core' | 'per-group' | 'auto' | 'per-thread' | 'per-ccx'
        argument?: 'auto' | 'loose' | undefined
      }
    | undefined
  cpu_maps?: { cpu_set: string; process: string }[] | undefined
  cpu_policy?:
    | 'none'
    | 'efficiency'
    | 'first-usable-node'
    | 'group-by-2-ccx'
    | 'group-by-2-clusters'
    | 'group-by-3-ccx'
    | 'group-by-3-clusters'
    | 'group-by-4-ccx'
    | 'group-by-4-cluster'
    | 'group-by-ccx'
    | 'group-by-cluster'
    | 'performance'
    | 'resource'
    | undefined
  cpu_set?:
    | {
        directive:
          | 'reset'
          | 'drop-cpu'
          | 'only-cpu'
          | 'drop-node'
          | 'only-node'
          | 'drop-cluster'
          | 'only-cluster'
          | 'drop-core'
          | 'only-core'
          | 'drop-thread'
          | 'only-thread'
        set?: string | undefined
      }[]
    | undefined
  daemon?: boolean | undefined
  debug_options?: DebugOptions | undefined
  default_path?:
    | { path?: string | undefined; type: 'current' | 'config' | 'parent' | 'origin' }
    | undefined
  description?: string | undefined
  device_atlas_options?: DeviceAtlasOptions | undefined
  dns_accept_family?: string | undefined
  environment_options?: EnvironmentOptions | undefined
  expose_deprecated_directives?: boolean | undefined
  expose_experimental_directives?: boolean | undefined
  external_check?: boolean | undefined
  fifty_one_degrees_options?: FiftyOneDegreesOptions | undefined
  force_cfg_parser_pause?: (number | null) | undefined
  gid?: number | undefined
  grace?: (number | null) | undefined
  group?: string | undefined
  h1_accept_payload_with_any_method?: boolean | undefined
  h1_case_adjust?: { from: string; to: string }[] | undefined
  h1_case_adjust_file?: string | undefined
  h1_do_not_close_on_insecure_transfer_encoding?: boolean | undefined
  h2_workaround_bogus_websocket_clients?: boolean | undefined
  hard_stop_after?: (number | null) | undefined
  harden?:
    | {
        reject_privileged_ports?:
          | { quic?: 'enabled' | 'disabled' | undefined; tcp?: 'enabled' | 'disabled' | undefined }
          | undefined
      }
    | undefined
  http_client_options?: HttpClientOptions | undefined
  http_err_codes?: HttpCodes[] | undefined
  http_fail_codes?: HttpCodes[] | undefined
  insecure_fork_wanted?: boolean | undefined
  insecure_setuid_wanted?: boolean | undefined
  jwt_options?: JwtOptions | undefined
  limited_quic?: boolean | undefined
  localpeer?: string | undefined
  log_send_hostname?: { enabled: 'enabled' | 'disabled'; param?: string | undefined } | undefined
  log_tag?: string | undefined
  lua_options?: LuaOptions | undefined
  'master-worker'?: boolean | undefined
  max_threads_per_group?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  mworker_max_reloads?: (number | null) | undefined
  nbthread?: number | undefined
  no_quic?: boolean | undefined
  node?: string | undefined
  numa_cpu_mapping?: 'enabled' | 'disabled' | undefined
  ocsp_update_options?: OcspUpdateOptions | undefined
  performance_options?: PerformanceOptions | undefined
  pidfile?: string | undefined
  pp2_never_send_local?: boolean | undefined
  prealloc_fd?: boolean | undefined
  runtime_apis?:
    | {
        accept_netscaler_cip?: number | undefined
        accept_proxy?: boolean | undefined
        allow_0rtt?: boolean | undefined
        alpn?: string | undefined
        backlog?: string | undefined
        ca_ignore_err?: string | undefined
        ca_sign_file?: string | undefined
        ca_sign_pass?: string | undefined
        ca_verify_file?: string | undefined
        cc?: string | undefined
        ciphers?: string | undefined
        ciphersuites?: string | undefined
        client_sigalgs?: string | undefined
        crl_file?: string | undefined
        crt_ignore_err?: string | undefined
        crt_list?: string | undefined
        curves?: string | undefined
        default_crt_list?: string[] | undefined
        defer_accept?: boolean | undefined
        ecdhe?: string | undefined
        expose_fd_listeners?: boolean | undefined
        force_sslv3?: boolean | undefined
        force_strict_sni?: 'enabled' | 'disabled' | undefined
        force_tlsv10?: boolean | undefined
        force_tlsv11?: boolean | undefined
        force_tlsv12?: boolean | undefined
        force_tlsv13?: boolean | undefined
        generate_certificates?: boolean | undefined
        gid?: number | undefined
        group?: string | undefined
        guid_prefix?: string | undefined
        id?: string | undefined
        idle_ping?: (number | null) | undefined
        interface?: string | undefined
        ktls?: 'on' | 'off' | undefined
        label?: string | undefined
        level?: 'user' | 'operator' | 'admin' | undefined
        maxconn?: number | undefined
        mode?: string | undefined
        mss?: string | undefined
        namespace?: string | undefined
        nbconn?: number | undefined
        nice?: number | undefined
        no_alpn?: boolean | undefined
        no_ca_names?: boolean | undefined
        no_sslv3?: boolean | undefined
        no_strict_sni?: boolean | undefined
        no_tls_tickets?: boolean | undefined
        no_tlsv10?: boolean | undefined
        no_tlsv11?: boolean | undefined
        no_tlsv12?: boolean | undefined
        no_tlsv13?: boolean | undefined
        npn?: string | undefined
        prefer_client_ciphers?: boolean | undefined
        proto?: string | undefined
        'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
        'quic-force-retry'?: boolean | undefined
        'quic-socket'?: 'connection' | 'listener' | undefined
        quic_cc_algo_burst_size?: (number | null) | undefined
        quic_cc_algo_max_window?: (number | null) | undefined
        severity_output?: 'none' | 'number' | 'string' | undefined
        shards?: string | undefined
        sigalgs?: string | undefined
        ssl?: boolean | undefined
        ssl_cafile?: string | undefined
        ssl_certificate?: string | undefined
        ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
        ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
        sslv3?: 'enabled' | 'disabled' | undefined
        strict_sni?: boolean | undefined
        tcp_md5sig?: string | undefined
        tcp_ss?: 1 | 2 | 3 | undefined
        tcp_user_timeout?: (number | null) | undefined
        tfo?: boolean | undefined
        thread?: string | undefined
        tls_ticket_keys?: string | undefined
        tls_tickets?: 'enabled' | 'disabled' | undefined
        tlsv10?: 'enabled' | 'disabled' | undefined
        tlsv11?: 'enabled' | 'disabled' | undefined
        tlsv12?: 'enabled' | 'disabled' | undefined
        tlsv13?: 'enabled' | 'disabled' | undefined
        transparent?: boolean | undefined
        uid?: string | undefined
        user?: string | undefined
        v4v6?: boolean | undefined
        v6only?: boolean | undefined
        verify?: 'none' | 'optional' | 'required' | undefined
        address: string
        name?: string | undefined
      }[]
    | undefined
  set_dumpable?: boolean | undefined
  set_var?: { expr: string; name: string }[] | undefined
  set_var_fmt?: { format: string; name: string }[] | undefined
  setcap?: string | undefined
  shm_stats_file?: string | undefined
  shm_stats_file_max_objects?: (number | null) | undefined
  ssl_options?: SslOptions | undefined
  stats_calculate_max_counters?: 'enabled' | 'disabled' | undefined
  stats_file?: string | undefined
  stats_maxconn?: (number | null) | undefined
  stats_timeout?: (number | null) | undefined
  strict_limits?: boolean | undefined
  thread_group_lines?: { group: string; num_or_range: string }[] | undefined
  thread_groups?: number | undefined
  tune_buffer_options?: TuneBufferOptions | undefined
  tune_lua_options?: TuneLuaOptions | undefined
  tune_options?: TuneOptions | undefined
  tune_quic_options?: TuneQuicOptions | undefined
  tune_ssl_options?: TuneSslOptions | undefined
  tune_vars_options?: TuneVarsOptions | undefined
  tune_zlib_options?: TuneZlibOptions | undefined
  uid?: number | undefined
  ulimit_n?: number | undefined
  user?: string | undefined
  warn_blocked_traffic_after?: (number | null) | undefined
  wurfl_options?: WurflOptions | undefined
  log_target_list?: LogTargets | undefined
}
type Group = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  users?: string | undefined
}
type Groups = Group[]
type HealthCheck = { [x: string]: unknown }
type HealthChecks = HealthCheck[]
type HttpErrorsSection = {
  error_files: Errorfile[]
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
}
type HttpErrorsSections = HttpErrorsSection[]
type DgramBind = {
  address?: string | undefined
  interface?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  namespace?: string | undefined
  port?: (number | null) | undefined
  'port-range-end'?: (number | null) | undefined
  transparent?: boolean | undefined
}
type LogForward = {
  'assume-rfc6587-ntf'?: boolean | undefined
  backlog?: (number | null) | undefined
  'dont-parse-log'?: boolean | undefined
  host?: 'append' | 'fill' | 'keep' | 'replace' | undefined
  maxconn?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  timeout_client?: (number | null) | undefined
  binds?: { [x: string]: Bind } | undefined
  dgram_binds?: { [x: string]: DgramBind } | undefined
  log_target_list?: LogTargets | undefined
}
type LogForwards = LogForward[]
type DgramBinds = DgramBind[]
type LogProfileStep = {
  drop?: 'enabled' | 'disabled' | undefined
  format?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  sd?: string | undefined
  step:
    | 'accept'
    | 'any'
    | 'close'
    | 'connect'
    | 'error'
    | 'request'
    | 'response'
    | 'http-req'
    | 'http-res'
    | 'http-after-res'
    | 'quic-init'
    | 'tcp-req-conn'
    | 'tcp-req-cont'
    | 'tcp-req-sess'
}
type LogProfileSteps = LogProfileStep[]
type LogProfile = {
  log_tag?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  steps?: LogProfileSteps | undefined
}
type LogProfiles = LogProfile[]
type MailerEntry = {
  address: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  port: number
}
type MailerEntries = MailerEntry[]
type MailersSection = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  timeout?: (number | null) | undefined
  mailer_entries?: { [x: string]: MailerEntry } | undefined
}
type MailersSections = MailersSection[]
type Nameserver = {
  address: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  port?: (number | null) | undefined
}
type Nameservers = Nameserver[]
type PeerEntry = {
  address: string
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  port: number | null
  shard?: number | undefined
}
type PeerEntries = PeerEntry[]
type DefaultBind = {
  accept_netscaler_cip?: number | undefined
  accept_proxy?: boolean | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backlog?: string | undefined
  ca_ignore_err?: string | undefined
  ca_sign_file?: string | undefined
  ca_sign_pass?: string | undefined
  ca_verify_file?: string | undefined
  cc?: string | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  client_sigalgs?: string | undefined
  crl_file?: string | undefined
  crt_ignore_err?: string | undefined
  crt_list?: string | undefined
  curves?: string | undefined
  default_crt_list?: string[] | undefined
  defer_accept?: boolean | undefined
  ecdhe?: string | undefined
  expose_fd_listeners?: boolean | undefined
  force_sslv3?: boolean | undefined
  force_strict_sni?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: boolean | undefined
  force_tlsv11?: boolean | undefined
  force_tlsv12?: boolean | undefined
  force_tlsv13?: boolean | undefined
  generate_certificates?: boolean | undefined
  gid?: number | undefined
  group?: string | undefined
  guid_prefix?: string | undefined
  id?: string | undefined
  idle_ping?: (number | null) | undefined
  interface?: string | undefined
  ktls?: 'on' | 'off' | undefined
  label?: string | undefined
  level?: 'user' | 'operator' | 'admin' | undefined
  maxconn?: number | undefined
  mode?: string | undefined
  mss?: string | undefined
  namespace?: string | undefined
  nbconn?: number | undefined
  nice?: number | undefined
  no_alpn?: boolean | undefined
  no_ca_names?: boolean | undefined
  no_sslv3?: boolean | undefined
  no_strict_sni?: boolean | undefined
  no_tls_tickets?: boolean | undefined
  no_tlsv10?: boolean | undefined
  no_tlsv11?: boolean | undefined
  no_tlsv12?: boolean | undefined
  no_tlsv13?: boolean | undefined
  npn?: string | undefined
  prefer_client_ciphers?: boolean | undefined
  proto?: string | undefined
  'quic-cc-algo'?: 'cubic' | 'newreno' | 'bbr' | 'nocc' | undefined
  'quic-force-retry'?: boolean | undefined
  'quic-socket'?: 'connection' | 'listener' | undefined
  quic_cc_algo_burst_size?: (number | null) | undefined
  quic_cc_algo_max_window?: (number | null) | undefined
  severity_output?: 'none' | 'number' | 'string' | undefined
  shards?: string | undefined
  sigalgs?: string | undefined
  ssl?: boolean | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  sslv3?: 'enabled' | 'disabled' | undefined
  strict_sni?: boolean | undefined
  tcp_md5sig?: string | undefined
  tcp_ss?: 1 | 2 | 3 | undefined
  tcp_user_timeout?: (number | null) | undefined
  tfo?: boolean | undefined
  thread?: string | undefined
  tls_ticket_keys?: string | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  tlsv10?: 'enabled' | 'disabled' | undefined
  tlsv11?: 'enabled' | 'disabled' | undefined
  tlsv12?: 'enabled' | 'disabled' | undefined
  tlsv13?: 'enabled' | 'disabled' | undefined
  transparent?: boolean | undefined
  uid?: string | undefined
  user?: string | undefined
  v4v6?: boolean | undefined
  v6only?: boolean | undefined
  verify?: 'none' | 'optional' | 'required' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type Table = {
  expire?: (string | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  no_purge?: boolean | undefined
  recv_only?: boolean | undefined
  size?: string | undefined
  store?: string | undefined
  type?: 'ip' | 'integer' | 'string' | 'binary' | undefined
  type_len?: (number | null) | undefined
  write_to?: (string | null) | undefined
}
type PeerSection = {
  default_bind?: DefaultBind | undefined
  default_server?: DefaultServer | undefined
  disabled?: boolean | undefined
  enabled?: boolean | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  shards?: number | undefined
  binds?: { [x: string]: Bind } | undefined
  log_target_list?: LogTargets | undefined
  peer_entries?: { [x: string]: PeerEntry } | undefined
  servers?: { [x: string]: Server } | undefined
  tables?: { [x: string]: Table } | undefined
}
type PeerSections = PeerSection[]
type Tables = Table[]
type Resolver = {
  accepted_payload_size?: number | undefined
  hold_nx?: (number | null) | undefined
  hold_obsolete?: (number | null) | undefined
  hold_other?: (number | null) | undefined
  hold_refused?: (number | null) | undefined
  hold_timeout?: (number | null) | undefined
  hold_valid?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  'parse-resolv-conf'?: boolean | undefined
  resolve_retries?: number | undefined
  timeout_resolve?: number | undefined
  timeout_retry?: number | undefined
  nameservers?: { [x: string]: Nameserver } | undefined
}
type Resolvers = Resolver[]
type Ring = {
  backing_file?: string | undefined
  description?: string | undefined
  format?:
    | 'iso'
    | 'local'
    | 'raw'
    | 'rfc3164'
    | 'rfc5424'
    | 'short'
    | 'priority'
    | 'timed'
    | undefined
  maxlen?: (number | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  size?: (number | null) | undefined
  timeout_connect?: (number | null) | undefined
  timeout_server?: (number | null) | undefined
  servers?: { [x: string]: Server } | undefined
}
type Rings = Ring[]
type TraceEntry = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  trace: string
}
type TraceEntries = TraceEntry[]
type Traces = {
  entries?: TraceEntries | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type User = {
  groups?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  password: string
  secure_password: boolean
  username: string
}
type Userlist = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name: string
  groups?: { [x: string]: Group } | undefined
  users?: { [x: string]: User } | undefined
}
type Userlists = Userlist[]
type Users = User[]
type Reload = {
  id?: string | undefined
  reload_timestamp?: number | undefined
  response?: string | undefined
  status?: 'failed' | 'in_progress' | 'succeeded' | undefined
}
type Reloads = Reload[]
type AclFile = {
  description?: string | undefined
  id?: string | undefined
  storage_name?: string | undefined
}
type AclFiles = AclFile[]
type AclFileEntry = { id?: string | undefined; value?: string | undefined }
type AclFilesEntries = AclFileEntry[]
type AcmeCertificateStatus = {
  acme_section?: string | undefined
  certificate?: string | undefined
  expiries_in?: string | undefined
  expiry_date?: string | undefined
  renewal_in?: string | undefined
  scheduled_renewal?: string | undefined
  state?: string | undefined
}
type AcmeStatus = AcmeCertificateStatus[]
type RuntimeServer = {
  address?: string | undefined
  admin_state?: 'ready' | 'maint' | 'drain' | undefined
  agent_addr?: string | undefined
  agent_port?: (number | null) | undefined
  agent_state?: (number | null) | undefined
  backend_forced_id?: (number | null) | undefined
  backend_id?: (number | null) | undefined
  backend_name?: string | undefined
  check_addr?: string | undefined
  check_health?: (number | null) | undefined
  check_port?: (number | null) | undefined
  check_result?: (number | null) | undefined
  check_state?: (number | null) | undefined
  check_status?: (number | null) | undefined
  forced_id?: (number | null) | undefined
  fqdn?: string | undefined
  id?: string | undefined
  iweight?: (number | null) | undefined
  last_time_change?: (number | null) | undefined
  name?: string | undefined
  operational_state?: 'up' | 'down' | 'stopping' | undefined
  port?: (number | null) | undefined
  srvrecord?: string | undefined
  use_ssl?: boolean | undefined
  uweight?: (number | null) | undefined
  weight?: (number | null) | undefined
}
type RuntimeServers = RuntimeServer[]
type RuntimeAddServer = {
  address?: string | undefined
  'agent-addr'?: string | undefined
  'agent-check'?: 'enabled' | 'disabled' | undefined
  'agent-inter'?: (number | null) | undefined
  'agent-port'?: (number | null) | undefined
  'agent-send'?: string | undefined
  allow_0rtt?: boolean | undefined
  alpn?: string | undefined
  backup?: 'enabled' | 'disabled' | undefined
  check?: 'enabled' | 'disabled' | undefined
  'check-send-proxy'?: 'enabled' | 'disabled' | undefined
  'check-sni'?: string | undefined
  'check-ssl'?: 'enabled' | 'disabled' | undefined
  check_alpn?: string | undefined
  check_proto?: string | undefined
  check_via_socks4?: 'enabled' | 'disabled' | undefined
  ciphers?: string | undefined
  ciphersuites?: string | undefined
  crl_file?: string | undefined
  downinter?: (number | null) | undefined
  error_limit?: (number | null) | undefined
  fall?: (number | null) | undefined
  fastinter?: (number | null) | undefined
  force_sslv3?: 'enabled' | 'disabled' | undefined
  force_tlsv10?: 'enabled' | 'disabled' | undefined
  force_tlsv11?: 'enabled' | 'disabled' | undefined
  force_tlsv12?: 'enabled' | 'disabled' | undefined
  force_tlsv13?: 'enabled' | 'disabled' | undefined
  health_check_address?: string | undefined
  health_check_port?: (number | null) | undefined
  id?: string | undefined
  inter?: (number | null) | undefined
  maintenance?: 'enabled' | 'disabled' | undefined
  maxconn?: (number | null) | undefined
  maxqueue?: (number | null) | undefined
  minconn?: (number | null) | undefined
  name?: string | undefined
  no_sslv3?: 'enabled' | 'disabled' | undefined
  no_tlsv10?: 'enabled' | 'disabled' | undefined
  no_tlsv11?: 'enabled' | 'disabled' | undefined
  no_tlsv12?: 'enabled' | 'disabled' | undefined
  no_tlsv13?: 'enabled' | 'disabled' | undefined
  npn?: string | undefined
  observe?: 'layer4' | 'layer7' | undefined
  'on-error'?: 'fastinter' | 'fail-check' | 'sudden-death' | 'mark-down' | undefined
  'on-marked-down'?: 'shutdown-sessions' | undefined
  'on-marked-up'?: 'shutdown-backup-sessions' | undefined
  pool_low_conn?: (number | null) | undefined
  pool_max_conn?: (number | null) | undefined
  pool_purge_delay?: (number | null) | undefined
  port?: (number | null) | undefined
  proto?: string | undefined
  'proxy-v2-options'?:
    | (
        | 'authority'
        | 'cert-cn'
        | 'cert-key'
        | 'cert-sig'
        | 'crc32c'
        | 'ssl'
        | 'ssl-cipher'
        | 'unique-id'
      )[]
    | undefined
  rise?: (number | null) | undefined
  'send-proxy'?: 'enabled' | 'disabled' | undefined
  'send-proxy-v2'?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl?: 'enabled' | 'disabled' | undefined
  send_proxy_v2_ssl_cn?: 'enabled' | 'disabled' | undefined
  slowstart?: (number | null) | undefined
  sni?: string | undefined
  source?: string | undefined
  ssl?: 'enabled' | 'disabled' | undefined
  ssl_cafile?: string | undefined
  ssl_certificate?: string | undefined
  ssl_max_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_min_ver?: 'SSLv3' | 'TLSv1.0' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  ssl_reuse?: 'enabled' | 'disabled' | undefined
  tfo?: 'enabled' | 'disabled' | undefined
  tls_tickets?: 'enabled' | 'disabled' | undefined
  track?: string | undefined
  verify?: 'none' | 'required' | undefined
  verifyhost?: string | undefined
  weight?: (number | null) | undefined
  ws?: 'auto' | 'h1' | 'h2' | undefined
}
type ProcessInfoItem = {
  active_peers?: (number | null) | undefined
  busy_polling?: (number | null) | undefined
  bytes_out_rate?: (number | null) | undefined
  compress_bps_in?: (number | null) | undefined
  compress_bps_out?: (number | null) | undefined
  compress_bps_rate_lim?: (number | null) | undefined
  conn_rate?: (number | null) | undefined
  conn_rate_limit?: (number | null) | undefined
  connected_peers?: (number | null) | undefined
  cum_conns?: (number | null) | undefined
  cum_req?: (number | null) | undefined
  cum_ssl_conns?: (number | null) | undefined
  curr_conns?: (number | null) | undefined
  curr_ssl_conns?: (number | null) | undefined
  dropped_logs?: (number | null) | undefined
  failed_resolutions?: (number | null) | undefined
  hard_max_conn?: (number | null) | undefined
  idle_pct?: (number | null) | undefined
  jobs?: (number | null) | undefined
  listeners?: (number | null) | undefined
  max_conn?: (number | null) | undefined
  max_conn_rate?: (number | null) | undefined
  max_pipes?: (number | null) | undefined
  max_sess_rate?: (number | null) | undefined
  max_sock?: (number | null) | undefined
  max_ssl_conns?: (number | null) | undefined
  max_ssl_rate?: (number | null) | undefined
  max_zlib_mem_usage?: (number | null) | undefined
  mem_max_mb?: (number | null) | undefined
  nbthread?: (number | null) | undefined
  node?: string | undefined
  pid?: (number | null) | undefined
  pipes_free?: (number | null) | undefined
  pipes_used?: (number | null) | undefined
  pool_alloc_mb?: (number | null) | undefined
  pool_failed?: (number | null) | undefined
  pool_used_mb?: (number | null) | undefined
  process_num?: (number | null) | undefined
  processes?: (number | null) | undefined
  release_date?: string | undefined
  run_queue?: (number | null) | undefined
  sess_rate?: (number | null) | undefined
  sess_rate_limit?: (number | null) | undefined
  ssl_backend_key_rate?: (number | null) | undefined
  ssl_backend_max_key_rate?: (number | null) | undefined
  ssl_cache_lookups?: (number | null) | undefined
  ssl_cache_misses?: (number | null) | undefined
  ssl_frontend_key_rate?: (number | null) | undefined
  ssl_frontend_max_key_rate?: (number | null) | undefined
  ssl_frontend_session_reuse?: (number | null) | undefined
  ssl_rate?: (number | null) | undefined
  ssl_rate_limit?: (number | null) | undefined
  stopping?: (number | null) | undefined
  tasks?: (number | null) | undefined
  total_bytes_out?: (number | null) | undefined
  ulimit_n?: (number | null) | undefined
  unstoppable?: (number | null) | undefined
  uptime?: (number | null) | undefined
  version?: string | undefined
  zlib_mem_usage?: (number | null) | undefined
}
type ProcessInfo = {
  error?: string | undefined
  info?: ProcessInfoItem | undefined
  runtimeAPI?: string | undefined
}
type Map = {
  description?: string | undefined
  file?: string | undefined
  id?: string | undefined
  size?: (number | null) | undefined
  storage_name?: string | undefined
}
type Maps = Map[]
type MapEntry = { id?: string | undefined; key?: string | undefined; value?: string | undefined }
type MapEntries = MapEntry[]
type SslCaFile = {
  count?: string | undefined
  file?: string | undefined
  storage_name?: string | undefined
}
type SslCaFiles = SslCaFile[]
type SslCertificate = {
  algorithm?: string | undefined
  authority_key_id?: string | undefined
  chain_issuer?: string | undefined
  chain_subject?: string | undefined
  description?: string | undefined
  domains?: string | undefined
  file?: string | undefined
  ip_addresses?: string | undefined
  issuers?: string | undefined
  not_after?: (string | null) | undefined
  not_before?: (string | null) | undefined
  serial?: string | undefined
  sha1_finger_print?: string | undefined
  sha256_finger_print?: string | undefined
  size?: (number | null) | undefined
  status?: string | undefined
  storage_name?: string | undefined
  subject?: string | undefined
  subject_alternative_names?: string | undefined
  subject_key_id?: string | undefined
}
type SslCertificates = SslCertificate[]
type SslCrl = {
  description?: string | undefined
  file?: string | undefined
  storage_name?: string | undefined
}
type SslCrls = SslCrl[]
type SslCrlEntry = {
  issuer?: string | undefined
  last_update?: string | undefined
  next_update?: string | undefined
  revoked_certificates?:
    | { revocation_date?: string | undefined; serial_number?: string | undefined }[]
    | undefined
  signature_algorithm?: string | undefined
  status?: string | undefined
  storage_name?: string | undefined
  version?: string | undefined
}
type SslCrlEntries = SslCrlEntry[]
type SslCrtList = { file?: string | undefined }
type SslCrtLists = SslCrtList[]
type SslCrtListEntry = {
  file?: string | undefined
  line_number?: number | undefined
  sni_filter?: string[] | undefined
  ssl_bind_config?: string | undefined
}
type SslCrtListEntries = SslCrtListEntry[]
type StickTable = {
  fields?:
    | {
        field?:
          | 'bytes_in_cnt'
          | 'bytes_in_rate'
          | 'bytes_out_cnt'
          | 'bytes_out_rate'
          | 'conn_cnt'
          | 'conn_cur'
          | 'conn_rate'
          | 'glitch_cnt'
          | 'glitch_rate'
          | 'gpc'
          | 'gpc_rate'
          | 'gpc0'
          | 'gpc0_rate'
          | 'gpc1'
          | 'gpc1_rate'
          | 'gpt0'
          | 'gpt'
          | 'http_req_cnt'
          | 'http_req_rate'
          | 'http_err_cnt'
          | 'http_err_rate'
          | 'http_fail_cnt'
          | 'http_fail_rate'
          | 'server_id'
          | 'sess_cnt'
          | 'sess_rate'
          | undefined
        idx?: number | undefined
        period?: number | undefined
        type?: 'rate' | 'counter' | undefined
      }[]
    | undefined
  name?: string | undefined
  size?: (number | null) | undefined
  type?: 'ip' | 'ipv6' | 'integer' | 'string' | 'binary' | undefined
  used?: (number | null) | undefined
}
type StickTables = StickTable[]
type StickTableEntry = {
  bytes_in_cnt?: (number | null) | undefined
  bytes_in_rate?: (number | null) | undefined
  bytes_out_cnt?: (number | null) | undefined
  bytes_out_rate?: (number | null) | undefined
  conn_cnt?: (number | null) | undefined
  conn_cur?: (number | null) | undefined
  conn_rate?: (number | null) | undefined
  exp?: (number | null) | undefined
  glitch_cnt?: (number | null) | undefined
  glitch_rate?: (number | null) | undefined
  gpc?: { idx?: number | undefined; value?: (number | null) | undefined } | undefined
  gpc_rate?: { idx?: number | undefined; value?: (number | null) | undefined } | undefined
  gpc0?: (number | null) | undefined
  gpc0_rate?: (number | null) | undefined
  gpc1?: (number | null) | undefined
  gpc1_rate?: (number | null) | undefined
  gpt?: { idx?: number | undefined; value?: (number | null) | undefined } | undefined
  gpt0?: (number | null) | undefined
  http_err_cnt?: (number | null) | undefined
  http_err_rate?: (number | null) | undefined
  http_fail_cnt?: (number | null) | undefined
  http_fail_rate?: (number | null) | undefined
  http_req_cnt?: (number | null) | undefined
  http_req_rate?: (number | null) | undefined
  id?: string | undefined
  key?: string | undefined
  server_id?: (number | null) | undefined
  sess_cnt?: (number | null) | undefined
  sess_rate?: (number | null) | undefined
  use?: boolean | undefined
}
type StickTableEntries = StickTableEntry[]
type Site = {
  farms?:
    | {
        balance?: Balance | undefined
        cond?: 'if' | 'unless' | undefined
        cond_test?: string | undefined
        forwardfor?: Forwardfor | undefined
        mode?: 'http' | 'tcp' | undefined
        name: string
        servers?: Server[] | undefined
        use_as: 'default' | 'conditional'
      }[]
    | undefined
  name: string
  service?:
    | {
        http_connection_mode?:
          | 'http-tunnel'
          | 'httpclose'
          | 'forced-close'
          | 'http-server-close'
          | 'http-keep-alive'
          | undefined
        listeners?: Bind[] | undefined
        maxconn?: (number | null) | undefined
        mode?: 'http' | 'tcp' | undefined
      }
    | undefined
}
type Sites = Site[]
type SpoeFiles = string[]
type SpoeScope = string
type SpoeScopes = SpoeScope[]
type SpoeAgent = {
  async?: 'enabled' | 'disabled' | undefined
  'continue-on-error'?: 'enabled' | undefined
  'dontlog-normal'?: 'enabled' | 'disabled' | undefined
  'engine-name'?: string | undefined
  'force-set-var'?: 'enabled' | undefined
  groups?: string | undefined
  hello_timeout?: number | undefined
  idle_timeout?: number | undefined
  log?: LogTargets | undefined
  'max-frame-size'?: number | undefined
  'max-waiting-frames'?: number | undefined
  maxconnrate?: number | undefined
  maxerrrate?: number | undefined
  messages?: string | undefined
  name: string
  'option_set-on-error'?: string | undefined
  'option_set-process-time'?: string | undefined
  'option_set-total-time'?: string | undefined
  'option_var-prefix'?: string | undefined
  pipelining?: 'enabled' | 'disabled' | undefined
  processing_timeout?: number | undefined
  'register-var-names'?: string | undefined
  'send-frag-payload'?: 'enabled' | 'disabled' | undefined
  'use-backend'?: string | undefined
}
type SpoeAgents = SpoeAgent[]
type SpoeGroup = { messages?: string | undefined; name: string }
type SpoeGroups = SpoeGroup[]
type SpoeMessage = {
  acl?: Acls | undefined
  args?: string | undefined
  event?:
    | {
        cond?: 'if' | 'unless' | undefined
        cond_test?: string | undefined
        name:
          | 'on-backend-http-request'
          | 'on-backend-tcp-request'
          | 'on-client-session'
          | 'on-frontend-http-request'
          | 'on-frontend-tcp-request'
          | 'on-http-response'
          | 'on-server-session'
          | 'on-tcp-response'
      }
    | undefined
  name: string
}
type SpoeMessages = SpoeMessage[]
type SpoeTransaction = {
  _version?: number | undefined
  id?: string | undefined
  status?: 'failed' | 'in_progress' | 'success' | undefined
}
type SpoeTransactions = SpoeTransaction[]
type NativeStatStats = {
  act?: (number | null) | undefined
  addr?: string | undefined
  agent_code?: (number | null) | undefined
  agent_desc?: string | undefined
  agent_duration?: (number | null) | undefined
  agent_fall?: (number | null) | undefined
  agent_health?: (number | null) | undefined
  agent_rise?: (number | null) | undefined
  agent_status?:
    | 'UNK'
    | 'INI'
    | 'SOCKERR'
    | 'L4OK'
    | 'L4TOUT'
    | 'L4CON'
    | 'L7OK'
    | 'L7STS'
    | undefined
  algo?: string | undefined
  bck?: (number | null) | undefined
  bin?: (number | null) | undefined
  bout?: (number | null) | undefined
  check_code?: (number | null) | undefined
  check_desc?: string | undefined
  check_duration?: (number | null) | undefined
  check_fall?: (number | null) | undefined
  check_health?: (number | null) | undefined
  check_rise?: (number | null) | undefined
  check_status?:
    | 'UNK'
    | 'INI'
    | 'SOCKERR'
    | 'L4OK'
    | 'L4TOUT'
    | 'L4CON'
    | 'L6OK'
    | 'L6TOUT'
    | 'L6RSP'
    | 'L7OK'
    | 'L7OKC'
    | 'L7TOUT'
    | 'L7RSP'
    | 'L7STS'
    | undefined
  chkdown?: (number | null) | undefined
  chkfail?: (number | null) | undefined
  cli_abrt?: (number | null) | undefined
  comp_byp?: (number | null) | undefined
  comp_in?: (number | null) | undefined
  comp_out?: (number | null) | undefined
  comp_rsp?: (number | null) | undefined
  conn_rate?: (number | null) | undefined
  conn_rate_max?: (number | null) | undefined
  conn_tot?: (number | null) | undefined
  cookie?: string | undefined
  ctime?: (number | null) | undefined
  dcon?: (number | null) | undefined
  downtime?: (number | null) | undefined
  dreq?: (number | null) | undefined
  dresp?: (number | null) | undefined
  dses?: (number | null) | undefined
  econ?: (number | null) | undefined
  ereq?: (number | null) | undefined
  eresp?: (number | null) | undefined
  hanafail?: string | undefined
  hrsp_1xx?: (number | null) | undefined
  hrsp_2xx?: (number | null) | undefined
  hrsp_3xx?: (number | null) | undefined
  hrsp_4xx?: (number | null) | undefined
  hrsp_5xx?: (number | null) | undefined
  hrsp_other?: (number | null) | undefined
  iid?: (number | null) | undefined
  intercepted?: (number | null) | undefined
  last_agt?: (string | null) | undefined
  last_chk?: (string | null) | undefined
  lastchg?: (number | null) | undefined
  lastsess?: (number | null) | undefined
  lbtot?: (number | null) | undefined
  mode?: 'tcp' | 'http' | 'health' | 'unknown' | undefined
  pid?: (number | null) | undefined
  qcur?: (number | null) | undefined
  qlimit?: (number | null) | undefined
  qmax?: (number | null) | undefined
  qtime?: (number | null) | undefined
  rate?: (number | null) | undefined
  rate_lim?: (number | null) | undefined
  rate_max?: (number | null) | undefined
  req_rate?: (number | null) | undefined
  req_rate_max?: (number | null) | undefined
  req_tot?: (number | null) | undefined
  rtime?: (number | null) | undefined
  scur?: (number | null) | undefined
  sid?: (number | null) | undefined
  slim?: (number | null) | undefined
  smax?: (number | null) | undefined
  srv_abrt?: (number | null) | undefined
  status?: 'UP' | 'DOWN' | 'NOLB' | 'MAINT' | 'no check' | undefined
  stot?: (number | null) | undefined
  throttle?: (number | null) | undefined
  tracked?: string | undefined
  ttime?: (number | null) | undefined
  weight?: (number | null) | undefined
  wredis?: (number | null) | undefined
  wretr?: (number | null) | undefined
}
type NativeStat = {
  backend_name?: string | undefined
  name?: string | undefined
  stats?: NativeStatStats | undefined
  type?: 'backend' | 'server' | 'frontend' | undefined
}
type NativeStats = {
  error?: string | undefined
  runtimeAPI?: string | undefined
  stats?: NativeStat[] | undefined
}
type GeneralFile = {
  description?: string | undefined
  file?: string | undefined
  id?: string | undefined
  size?: (number | null) | undefined
  storage_name?: string | undefined
}
type GeneralFiles = GeneralFile[]
type SslCrtListFile = {
  description?: string | undefined
  file?: string | undefined
  size?: (number | null) | undefined
  storage_name?: string | undefined
}
type SslCrtListFiles = SslCrtListFile[]
type Transaction = {
  _version?: number | undefined
  id?: string | undefined
  status?: 'failed' | 'outdated' | 'in_progress' | 'success' | undefined
}
type Transactions = Transaction[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: Health; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/info': {
      $get:
        | { input: {}; output: Info; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service_discovery/aws': {
      $get:
        | { input: {}; output: AwsRegions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: AwsRegion }; output: AwsRegion; outputFormat: 'json'; status: 201 }
        | { input: { json: AwsRegion }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: AwsRegion }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: AwsRegion }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service_discovery/aws/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | { input: { param: { id: string } }; output: AwsRegion; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: AwsRegion }
            output: AwsRegion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AwsRegion }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AwsRegion }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AwsRegion }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/service_discovery/consul': {
      $get:
        | { input: {}; output: Consuls; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: Consul }; output: Consul; outputFormat: 'json'; status: 201 }
        | { input: { json: Consul }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: Consul }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: Consul }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service_discovery/consul/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | { input: { param: { id: string } }; output: Consul; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: Consul }
            output: Consul
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Consul }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Consul }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: Consul }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/configuration': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/configuration/acme': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: AcmeProviders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: AcmeProvider
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: AcmeProvider
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/acme/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: AcmeProvider
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: AcmeProvider
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: AcmeProvider
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: AcmeProvider }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Backends
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Backend
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Backend
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Backend
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Backend
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Backend
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Backend }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/acls': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/acls/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/filters': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Filters
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/filters/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_after_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_after_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_error_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_error_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/http_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/log_targets': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/server_switching_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ServerSwitchingRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRules }
            output: ServerSwitchingRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRules }
            output: ServerSwitchingRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/server_switching_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ServerSwitchingRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: ServerSwitchingRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: ServerSwitchingRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: ServerSwitchingRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: ServerSwitchingRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/server_templates': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ServerTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: ServerTemplate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: ServerTemplate
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/server_templates/:prefix': {
      $delete:
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ServerTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: ServerTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: ServerTemplate
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { prefix: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ServerTemplate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/servers': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Servers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/servers/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/stick_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: StickRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRules }
            output: StickRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRules }
            output: StickRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/stick_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: StickRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: StickRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: StickRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: StickRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: StickRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: StickRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/backends/:parent_name/tcp_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/caches': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Caches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Cache
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Cache
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/caches/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Cache
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Cache
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Cache
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Cache }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/crt_stores': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: CrtStores
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: CrtStore
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: CrtStore
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/crt_stores/:crt_store/crt_loads': {
      $get:
        | {
            input: { param: { crt_store: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: CrtLoads
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { crt_store: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { crt_store: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: CrtLoad
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { crt_store: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: CrtLoad
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { crt_store: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { crt_store: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { crt_store: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/crt_stores/:crt_store/crt_loads/:certificate': {
      $delete:
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: CrtLoad
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: CrtLoad
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: CrtLoad
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { crt_store: string; certificate: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: CrtLoad }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/crt_stores/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: CrtStore
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: CrtStore
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: CrtStore
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: CrtStore }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: DefaultsSections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Defaults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Defaults
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Defaults }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/acls': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/acls/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_after_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_after_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_error_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_error_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/http_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/log_targets': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/quic_initial_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/quic_initial_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: TcpResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/defaults/:parent_name/tcp_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: TcpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/fcgi_apps': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: FcgiApps
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: FcgiApp
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: FcgiApp
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/fcgi_apps/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: FcgiApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: FcgiApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: FcgiApp
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: FcgiApp }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/fcgi_apps/:parent_name/acls': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/fcgi_apps/:parent_name/acls/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Frontends
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Frontend
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Frontend
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Frontend
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Frontend
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Frontend
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Frontend }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/acls': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { acl_name?: string | undefined; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Acls
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acls }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/acls/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Acl
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Acl }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/backend_switching_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: BackendSwitchingRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRules }
            output: BackendSwitchingRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRules }
            output: BackendSwitchingRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/backend_switching_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: BackendSwitchingRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: BackendSwitchingRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: BackendSwitchingRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: BackendSwitchingRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: BackendSwitchingRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: BackendSwitchingRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/binds': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Binds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/binds/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/captures': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Captures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Captures }
            output: Captures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Captures }
            output: Captures
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Captures }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Captures }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/captures/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Capture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Capture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Capture
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Capture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Capture
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Capture }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/filters': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Filters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Filters
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filters }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/filters/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Filter
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Filter }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/force_be_switches': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ForceBeSwitches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: ForceBeSwitch
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: ForceBeSwitch
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/force_be_switches/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: ForceBeSwitch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: ForceBeSwitch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: ForceBeSwitch
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: ForceBeSwitch }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_after_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: HttpAfterResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_after_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: HttpAfterResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpAfterResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_error_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: HttpErrorRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_error_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: HttpErrorRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: HttpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: HttpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_response_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: HttpResponseRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/http_response_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: HttpResponseRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpResponseRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/log_targets': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/quic_initial_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: QuicInitialRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/quic_initial_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: QuicInitialRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: QuicInitialRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/ssl_front_uses': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SslFrontUses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: SslFrontUse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: SslFrontUse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/ssl_front_uses/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SslFrontUse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: SslFrontUse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: SslFrontUse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: SslFrontUse }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/tcp_request_rules': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: TcpRequestRules
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRules }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/frontends/:parent_name/tcp_request_rules/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: TcpRequestRule
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpRequestRule }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/global': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Global
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Global }
            output: Global
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Global }
            output: Global
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Global }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Global }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/global/log_targets': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/global/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number } } & { query: { transaction_id?: string | undefined } }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/groups': {
      $get:
        | {
            input: { query: { userlist: string; transaction_id?: string | undefined } }
            output: Groups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userlist: string; transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Group
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/groups/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Group
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Group }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: HealthChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: HealthCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: HealthCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: HealthCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: HealthCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: HealthCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: HealthCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks/:parent_name/http_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: HttpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks/:parent_name/http_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: HttpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks/:parent_name/tcp_checks': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: TcpChecks
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpChecks }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/healthchecks/:parent_name/tcp_checks/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: TcpCheck
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TcpCheck }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/http_errors_sections': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: HttpErrorsSections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: HttpErrorsSection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: HttpErrorsSection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/http_errors_sections/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: HttpErrorsSection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: HttpErrorsSection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: HttpErrorsSection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: HttpErrorsSection }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: LogForwards
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: LogForward
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: LogForward
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: LogForward
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: LogForward
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: LogForward
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: LogForward }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/binds': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Binds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/binds/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/dgram_binds': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: DgramBinds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: DgramBind
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: DgramBind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/dgram_binds/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: DgramBind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: DgramBind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: DgramBind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: DgramBind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/log_targets': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_forwards/:parent_name/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_profiles': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: LogProfiles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: LogProfile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: LogProfile
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/log_profiles/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: LogProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: LogProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: LogProfile
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogProfile }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/mailer_entries': {
      $get:
        | {
            input: { query: { mailers_section: string; transaction_id?: string | undefined } }
            output: MailerEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { mailers_section: string; transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: MailerEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: MailerEntry
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/mailer_entries/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { mailers_section: string; transaction_id?: string | undefined }
            }
            output: MailerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { mailers_section: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { mailers_section: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: MailerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: MailerEntry
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                mailers_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: MailerEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/mailers_section': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: MailersSections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: MailersSection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: MailersSection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/mailers_section/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: MailersSection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: MailersSection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: MailersSection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: MailersSection }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/nameservers': {
      $get:
        | {
            input: { query: { resolver: string; transaction_id?: string | undefined } }
            output: Nameservers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { resolver: string; transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Nameserver
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Nameserver
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/nameservers/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { resolver: string; transaction_id?: string | undefined }
            }
            output: Nameserver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { resolver: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { resolver: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Nameserver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Nameserver
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                resolver: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Nameserver }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peer_entries': {
      $get:
        | {
            input: { query: { peer_section: string; transaction_id?: string | undefined } }
            output: PeerEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { peer_section: string; transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: PeerEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: PeerEntry
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peer_entries/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { peer_section: string; transaction_id?: string | undefined }
            }
            output: PeerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { peer_section: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { peer_section: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: PeerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: PeerEntry
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                peer_section: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: PeerEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peer_section': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: PeerSections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: PeerSection }
            output: PeerSection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: PeerSection }
            output: PeerSection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: PeerSection }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: PeerSection }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: PeerSection }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peer_section/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: PeerSection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/binds': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Binds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/binds/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Bind
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Bind }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/log_targets': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: LogTargets
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTargets }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/log_targets/:index': {
      $delete:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: LogTarget
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { index: number; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: LogTarget }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/servers': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Servers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/servers/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/tables': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Tables
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Table
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Table
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/peers/:parent_name/tables/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Table
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Table
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Table
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Table }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/raw': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined; version?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined; version?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                version?: number | undefined
                force_reload?: boolean | undefined
                skip_version?: boolean | undefined
                skip_reload?: boolean | undefined
                only_validate?: boolean | undefined
              }
            } & { header: { 'X-Runtime-Actions'?: string | undefined } } & { json: string }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                version?: number | undefined
                force_reload?: boolean | undefined
                skip_version?: boolean | undefined
                skip_reload?: boolean | undefined
                only_validate?: boolean | undefined
              }
            } & { header: { 'X-Runtime-Actions'?: string | undefined } } & { json: string }
            output: string
            outputFormat: 'text'
            status: 202
          }
        | {
            input: {
              query: {
                version?: number | undefined
                force_reload?: boolean | undefined
                skip_version?: boolean | undefined
                skip_reload?: boolean | undefined
                only_validate?: boolean | undefined
              }
            } & { header: { 'X-Runtime-Actions'?: string | undefined } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                version?: number | undefined
                force_reload?: boolean | undefined
                skip_version?: boolean | undefined
                skip_reload?: boolean | undefined
                only_validate?: boolean | undefined
              }
            } & { header: { 'X-Runtime-Actions'?: string | undefined } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/resolvers': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Resolvers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Resolver
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Resolver
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/resolvers/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Resolver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Resolver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Resolver
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Resolver }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/rings': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Rings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Ring
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Ring
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/rings/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Ring
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Ring
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Ring
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Ring }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/rings/:parent_name/servers': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Servers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/rings/:parent_name/servers/:name': {
      $delete:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Server
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; parent_name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Server }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/traces': {
      $delete:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Traces
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Traces }
            output: Traces
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Traces }
            output: Traces
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Traces }
            output: Traces
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Traces }
            output: Traces
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Traces }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/traces/entries': {
      $delete:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: TraceEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: TraceEntry
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: TraceEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/userlists': {
      $get:
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Userlists
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Userlist }
            output: Userlist
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Userlist }
            output: Userlist
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Userlist }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Userlist }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
                full_section?: boolean | undefined
              }
            } & { json: Userlist }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/userlists/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Userlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { transaction_id?: string | undefined; full_section?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/users': {
      $get:
        | {
            input: { query: { userlist: string; transaction_id?: string | undefined } }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userlist: string; transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/users/:username': {
      $delete:
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { username: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } } & {
              query: { userlist: string; transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: User
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { username: string } } & {
              query: {
                userlist: string
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/configuration/version': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/reloads': {
      $get:
        | { input: {}; output: Reloads; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/reloads/:id': {
      $get:
        | { input: { param: { id: string } }; output: Reload; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/acls': {
      $get:
        | { input: {}; output: AclFiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/acls/:id': {
      $get:
        | { input: { param: { id: string } }; output: AclFile; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/acls/:parent_name/entries': {
      $get:
        | {
            input: { param: { parent_name: string } }
            output: AclFilesEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & { json: AclFileEntry }
            output: AclFileEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & { json: AclFileEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & { json: AclFileEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & { json: AclFileEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & { json: AclFilesEntries }
            output: AclFilesEntries
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & { json: AclFilesEntries }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & { json: AclFilesEntries }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/acls/:parent_name/entries/:id': {
      $delete:
        | {
            input: { param: { parent_name: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; id: string } }
            output: AclFileEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/acme': {
      $get:
        | { input: {}; output: AcmeStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { query: { certificate: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { certificate: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { certificate: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/backends/:parent_name/servers': {
      $get:
        | {
            input: { param: { parent_name: string } }
            output: RuntimeServers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & { json: RuntimeAddServer }
            output: RuntimeAddServer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & { json: RuntimeAddServer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & { json: RuntimeAddServer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string } } & { json: RuntimeAddServer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & { json: RuntimeAddServer }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/backends/:parent_name/servers/:name': {
      $delete:
        | {
            input: { param: { parent_name: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; name: string } }
            output: RuntimeServer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; name: string } } & { json: RuntimeServer }
            output: RuntimeServer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; name: string } } & { json: RuntimeServer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; name: string } } & { json: RuntimeServer }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; name: string } } & { json: RuntimeServer }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/info': {
      $get:
        | { input: {}; output: ProcessInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/maps': {
      $get:
        | {
            input: { query: { include_unmanaged?: boolean | undefined } }
            output: Maps
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_unmanaged?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { include_unmanaged?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/maps/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: { forceDelete?: boolean | undefined; force_sync?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { forceDelete?: boolean | undefined; force_sync?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { forceDelete?: boolean | undefined; force_sync?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: { param: { name: string } }; output: Map; outputFormat: 'json'; status: 200 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & { query: { force_sync?: boolean | undefined } } & {
              json: MapEntries
            }
            output: MapEntries
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & { query: { force_sync?: boolean | undefined } } & {
              json: MapEntries
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { query: { force_sync?: boolean | undefined } } & {
              json: MapEntries
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/maps/:parent_name/entries': {
      $get:
        | {
            input: { param: { parent_name: string } }
            output: MapEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntry }
            output: MapEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntries }
            output: MapEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntries }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntries }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: MapEntries }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/maps/:parent_name/entries/:id': {
      $delete:
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; id: string } }
            output: MapEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: { value: string } }
            output: MapEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: { value: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: { value: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_sync?: boolean | undefined }
            } & { json: { value: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_ca_files': {
      $get:
        | { input: {}; output: SslCaFiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { form: { file_upload: File } }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_ca_files/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { name: string } }
            output: SslCaFile
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_ca_files/:name/entries': {
      $post:
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: SslCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_ca_files/:name/entries/:index': {
      $get:
        | {
            input: { param: { name: string; index: number } }
            output: SslCertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; index: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; index: number } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_certs': {
      $get:
        | { input: {}; output: SslCertificates; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { form: { file_upload: File } }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_certs/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { name: string } }
            output: SslCertificate
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_crl_files': {
      $get:
        | { input: {}; output: SslCrls; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { form: { file_upload: File } }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_crl_files/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { name: string } } & { query: { index?: (number | null) | undefined } }
            output: SslCrlEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { index?: (number | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { index?: (number | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { form: { file_upload: File } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/ssl_crt_lists': {
      $get:
        | { input: {}; output: SslCrtLists; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/ssl_crt_lists/entries': {
      $delete:
        | {
            input: {
              query: { name: string; cert_file: string; line_number?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { name: string; cert_file: string; line_number?: (number | null) | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { name: string; cert_file: string; line_number?: (number | null) | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { name: string; cert_file: string; line_number?: (number | null) | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { name: string } }
            output: SslCrtListEntries
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { query: { name: string } } & { json: SslCrtListEntry }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { name: string } } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { name: string } } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { name: string } } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/runtime/stick_tables': {
      $get:
        | { input: {}; output: StickTables; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/stick_tables/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: StickTable
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/runtime/stick_tables/:parent_name/entries': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: {
                filter?: string | undefined
                key?: string | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            }
            output: StickTableEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: {
                filter?: string | undefined
                key?: string | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              json: { data_type: StickTableEntry; key: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string } } & {
              json: { data_type: StickTableEntry; key: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/sites': {
      $get:
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Sites
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/sites/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { query: { transaction_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Site
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                transaction_id?: string | undefined
                version?: number | undefined
                force_reload?: boolean | undefined
              }
            } & { json: Site }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/spoe/:parent_name/version': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files': {
      $get:
        | { input: {}; output: SpoeFiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { form: { file_upload?: File | undefined } }
            output: string
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { name: string } }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeScopes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeScope }
            output: SpoeScope
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeScope }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeScope }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeScope }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:name': {
      $delete:
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/agents': {
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeAgents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: SpoeAgent
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/agents/:name': {
      $delete:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeAgent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: SpoeAgent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeAgent }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/groups': {
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeGroups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: SpoeGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/groups/:name': {
      $delete:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: SpoeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeGroup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/messages': {
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeMessages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: SpoeMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { parent_name: string; scope_name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/scopes/:scope_name/messages/:name': {
      $delete:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: SpoeMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: SpoeMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; scope_name: string; name: string } } & {
              query: { transaction_id?: string | undefined; version?: number | undefined }
            } & { json: SpoeMessage }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/transactions': {
      $get:
        | {
            input: { param: { parent_name: string } } & {
              query: { status?: 'failed' | 'in_progress' | undefined }
            }
            output: SpoeTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string } } & {
              query: { status?: 'failed' | 'in_progress' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { parent_name: string } } & { query: { version: number } }
            output: SpoeTransaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { parent_name: string } } & { query: { version: number } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { parent_name: string } } & { query: { version: number } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/spoe/spoe_files/:parent_name/transactions/:id': {
      $delete:
        | {
            input: { param: { parent_name: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { parent_name: string; id: string } }
            output: SpoeTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_reload?: boolean | undefined }
            }
            output: SpoeTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_reload?: boolean | undefined }
            }
            output: SpoeTransaction
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { parent_name: string; id: string } } & {
              query: { force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/stats': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/stats/native': {
      $get:
        | {
            input: {
              query: {
                type?: 'frontend' | 'backend' | 'server' | undefined
                name?: string | undefined
                parent?: string | undefined
              }
            }
            output: NativeStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: 'frontend' | 'backend' | 'server' | undefined
                name?: string | undefined
                parent?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                type?: 'frontend' | 'backend' | 'server' | undefined
                name?: string | undefined
                parent?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage': {
      $get:
        | { input: {}; output: Endpoints; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/haproxy/storage/general': {
      $get:
        | { input: {}; output: GeneralFiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { form: { file_upload?: File | undefined } }
            output: GeneralFile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/general/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | { input: { param: { name: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/maps': {
      $get:
        | { input: {}; output: Maps; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Map
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/maps/:name': {
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | { input: { param: { name: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/ssl_certificates': {
      $get:
        | { input: {}; output: SslCertificates; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: SslCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: SslCertificate
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { form: { file_upload?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/ssl_certificates/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } }
            output: SslCertificate
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: SslCertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: SslCertificate
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/ssl_crt_lists': {
      $get:
        | { input: {}; output: SslCrtListFiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { query: { force_reload?: boolean | undefined } } & {
              form: { file_upload?: File | undefined }
            }
            output: SslCrtListFile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { force_reload?: boolean | undefined } } & {
              form: { file_upload?: File | undefined }
            }
            output: SslCrtListFile
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { force_reload?: boolean | undefined } } & {
              form: { file_upload?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { force_reload?: boolean | undefined } } & {
              form: { file_upload?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { force_reload?: boolean | undefined } } & {
              form: { file_upload?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/ssl_crt_lists/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: { param: { name: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: SslCrtListFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: SslCrtListFile
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { skip_reload?: boolean | undefined; force_reload?: boolean | undefined }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/storage/ssl_crt_lists/:name/entries': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: {
                certificate: string
                line_number: number
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: {
                certificate: string
                line_number: number
                force_reload?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: {
                certificate: string
                line_number: number
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                certificate: string
                line_number: number
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                certificate: string
                line_number: number
                force_reload?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } }
            output: SslCrtListEntries
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { param: { name: string } } & {
              query: { force_reload?: boolean | undefined }
            } & { json: SslCrtListEntry }
            output: SslCrtListEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              query: { force_reload?: boolean | undefined }
            } & { json: SslCrtListEntry }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              query: { force_reload?: boolean | undefined }
            } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { force_reload?: boolean | undefined }
            } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { name: string } } & {
              query: { force_reload?: boolean | undefined }
            } & { json: SslCrtListEntry }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/transactions': {
      $get:
        | {
            input: { query: { status?: 'failed' | 'in_progress' | undefined } }
            output: Transactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { status?: 'failed' | 'in_progress' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { version: number } }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { version: number } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { version: number } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/haproxy/transactions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Transaction
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: string } } & { query: { force_reload?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/specification': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/specification_openapiv3': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
