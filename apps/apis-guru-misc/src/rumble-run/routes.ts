import { createRoute, z } from '@hono/zod-openapi'

const MiradoreCredentialFieldsSchema = z
  .object({
    api_key: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    hostname: z.string().openapi({ example: 'yourcompanyinc.online.miradore.com' }),
  })
  .openapi({ required: ['hostname', 'api_key'] })
  .openapi('MiradoreCredentialFields')

const AWSCredentialFieldsSchema = z
  .object({
    access_key: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    regions: z.string().exactOptional().openapi({ example: 'us-west-1, us-east-2' }),
    role: z.string().exactOptional().openapi({ example: 'rumble-role' }),
    secret_access_key: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    use_cross_account_org: z.string().exactOptional().openapi({ example: 'true' }),
  })
  .openapi({ required: ['access_key', 'secret_access_key'] })
  .openapi('AWSCredentialFields')

const AzureClientSecretCredentialFieldsSchema = z
  .object({
    client_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    client_secret: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    multi_subscription: z.string().exactOptional().openapi({ example: 'true' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    tenant_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
  })
  .openapi({ required: ['client_id', 'client_secret', 'tenant_id'] })
  .openapi('AzureClientSecretCredentialFields')

const AzureUsernamePasswordCredentialFieldsSchema = z
  .object({
    client_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    password: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    tenant_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    username: z.string().openapi({ example: 'user@example.com' }),
  })
  .openapi({ required: ['client_id', 'tenant_id', 'username', 'password'] })
  .openapi('AzureUsernamePasswordCredentialFields')

const CrowdstrikeCredentialFieldsSchema = z
  .object({
    api_url: z.string().openapi({ example: 'example.crowdstrike.com' }),
    client_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    client_secret: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
  })
  .openapi({ required: ['client_id', 'client_secret', 'api_url'] })
  .openapi('CrowdstrikeCredentialFields')

const CensysCredentialFieldsSchema = z
  .object({
    api_url: z.string().exactOptional().openapi({ example: 'https://search.censys.io' }),
    client_id: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    client_secret: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
  })
  .openapi({ required: ['client_id', 'client_secret'] })
  .openapi('CensysCredentialFields')

const SNMPv2CommunitiesCredentialFieldsSchema = z
  .object({ community: z.string().openapi({ example: 'public,private' }) })
  .openapi({ required: ['community'] })
  .openapi('SNMPv2CommunitiesCredentialFields')

const SNMPv3CredentialFieldsSchema = z
  .object({
    'auth-passphrase': z.string().exactOptional().openapi({ example: 'authpass' }),
    'auth-protocol': z.string().exactOptional().openapi({ example: 'sha' }),
    context: z.string().exactOptional().openapi({ example: 'vlan-32' }),
    'privacy-passphrase': z.string().exactOptional().openapi({ example: 'privpass' }),
    'privacy-protocol': z.string().exactOptional().openapi({ example: 'aes' }),
    username: z.string().openapi({ example: 'user' }),
  })
  .openapi({ required: ['username'] })
  .openapi('SNMPv3CredentialFields')

const VMwareCredentialFieldsSchema = z
  .object({
    insecure: z.string().exactOptional().openapi({ example: 'true' }),
    password: z.string().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    thumbprints: z.string().exactOptional().openapi({ example: 'IP=SHA256:B64HASH' }),
    username: z.string().openapi({ example: 'user' }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('VMwareCredentialFields')

type CredentialFieldsType =
  | z.infer<typeof MiradoreCredentialFieldsSchema>
  | z.infer<typeof AWSCredentialFieldsSchema>
  | z.infer<typeof AzureClientSecretCredentialFieldsSchema>
  | z.infer<typeof AzureUsernamePasswordCredentialFieldsSchema>
  | z.infer<typeof CrowdstrikeCredentialFieldsSchema>
  | z.infer<typeof CensysCredentialFieldsSchema>
  | z.infer<typeof SNMPv2CommunitiesCredentialFieldsSchema>
  | z.infer<typeof SNMPv3CredentialFieldsSchema>
  | z.infer<typeof VMwareCredentialFieldsSchema>

const APIKeySchema = z
  .object({
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    comment: z.string().exactOptional().openapi({ example: 'API key used for Splunk integration' }),
    counter: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by: z.email().exactOptional().openapi({ example: 'user@example.com' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    inactive: z.boolean().exactOptional().openapi({ example: 'tue' }),
    last_used_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    last_used_ip: z.string().exactOptional().openapi({ example: '127.0.0.1' }),
    last_used_ua: z.string().exactOptional().openapi({ example: 'curl/7.44.1' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    token: z.string().exactOptional().openapi({ example: 'CTXXXXXXXXXXXXX' }),
    type: z.string().exactOptional().openapi({ example: 'org' }),
    usage_limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10000 }),
    usage_today: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 100 }),
  })
  .openapi({ required: ['id'] })
  .openapi('APIKey')

const APIKeyOptionsSchema = z
  .object({
    comment: z.string().exactOptional().openapi({ example: 'Splunk integration key' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
  })
  .openapi({ required: [] })
  .openapi('APIKeyOptions')

const AgentSchema = z
  .object({
    arch: z.string().exactOptional().openapi({ example: 'amd64' }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    connected: z.boolean().exactOptional().openapi({ example: true }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    deactivated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    external_ip: z.string().exactOptional().openapi({ example: '1.1.1.1' }),
    host_id: z.string().exactOptional().openapi({ example: '6f9e6fe52271da70962e007183c5c9c9' }),
    hub_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    inactive: z.boolean().exactOptional().openapi({ example: false }),
    internal_ip: z.string().exactOptional().openapi({ example: '192.168.0.1' }),
    last_checkin: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    name: z.hostname().exactOptional().openapi({ example: 'RUMBLE-AGENT' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    os: z.string().exactOptional().openapi({ example: 'Windows' }),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    system_info: z.looseObject({}).exactOptional(),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        example: '1.2.3 (build 20191219224016) [fc50c5eefdc3ff5c60533c3c345d14d336396272]',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('Agent')

const AgentSiteIDSchema = z
  .object({ site_id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }) })
  .openapi({ required: ['site_id'] })
  .openapi('AgentSiteID')

const AssetSchema = z
  .object({
    addresses: z.array(z.string().openapi({ example: '192.168.0.1' })).exactOptional(),
    addresses_extra: z.array(z.string().openapi({ example: '192.168.100.1' })).exactOptional(),
    agent_name: z.string().exactOptional().openapi({ example: 'LAPTOP-F4P1R6' }),
    alive: z.boolean().exactOptional().openapi({ example: true }),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    comments: z.string().exactOptional().openapi({ example: 'File Server' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    credentials: z.record(z.string(), z.string()).exactOptional(),
    detected_by: z.string().exactOptional().openapi({ example: 'icmp' }),
    domains: z.array(z.string().openapi({ example: 'www' })).exactOptional(),
    first_seen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    hw: z.string().exactOptional().openapi({ example: 'Dell PowerEdge 2500' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_agent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_seen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_task_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    lowest_rtt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    lowest_ttl: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    mac_vendors: z.array(z.string().openapi({ example: 'Dell' })).exactOptional(),
    macs: z.array(z.mac().openapi({ example: '11:22:33:44:55:66' })).exactOptional(),
    names: z.array(z.string().openapi({ example: 'www' })).exactOptional(),
    newest_mac: z.mac().exactOptional().openapi({ example: '11:22:33:44:55:66' }),
    newest_mac_age: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1304035200000000000 }),
    newest_mac_vendor: z.string().exactOptional().openapi({ example: 'Intel Corporate' }),
    org_name: z.string().exactOptional().openapi({ example: 'Test Labs' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    os: z.string().exactOptional().openapi({ example: 'Ubuntu Linux' }),
    os_version: z.string().exactOptional().openapi({ example: 18.04 }),
    rtts: z.looseObject({}).exactOptional(),
    service_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    service_count_arp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_icmp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_tcp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 7 }),
    service_count_udp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_ports_products: z.array(z.string().openapi({ example: 'bind' })).exactOptional(),
    service_ports_protocols: z.array(z.string().openapi({ example: 'ssh' })).exactOptional(),
    service_ports_tcp: z.array(z.string().openapi({ example: 22 })).exactOptional(),
    service_ports_udp: z.array(z.string().openapi({ example: 53 })).exactOptional(),
    services: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    site_name: z.string().exactOptional().openapi({ example: 'Primary' }),
    tags: z.record(z.string(), z.string()).exactOptional(),
    type: z.string().exactOptional().openapi({ example: 'Server' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'version'] })
  .openapi('Asset')

const AssetCommentsSchema = z
  .object({ comments: z.string().openapi({ example: 'Sales Laptop' }) })
  .openapi({ required: ['comments'] })
  .openapi('AssetComments')

const AssetServiceNowSchema = z
  .object({
    addresses_extra: z.string().exactOptional().openapi({ example: '192.168.0.5;192.168.0.3' }),
    addresses_scope: z.string().exactOptional().openapi({ example: '192.168.100.1;192.168.100.2' }),
    alive: z.boolean().exactOptional().openapi({ example: true }),
    asset_id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    comments: z.string().exactOptional().openapi({ example: 'File Server' }),
    detected_by: z.string().exactOptional().openapi({ example: 'icmp' }),
    domains: z.string().exactOptional().openapi({ example: 'rumble.run;rumble.local.lan' }),
    first_discovered: z.string().exactOptional().openapi({ example: '2006-01-02 15:04:05' }),
    hw_product: z.string().exactOptional().openapi({ example: 'PowerEdge' }),
    hw_vendor: z.string().exactOptional().openapi({ example: 'Dell' }),
    hw_version: z.string().exactOptional().openapi({ example: 2 }),
    ip_address: z.string().exactOptional().openapi({ example: '192.168.0.1' }),
    last_discovered: z.string().exactOptional().openapi({ example: '2006-01-02 15:04:05' }),
    last_updated: z.string().exactOptional().openapi({ example: '2006-01-02 15:04:05' }),
    lowest_rtt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    lowest_ttl: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    mac_address: z.mac().exactOptional().openapi({ example: '11:22:33:44:55:66' }),
    mac_manufacturer: z.string().exactOptional().openapi({ example: 'Dell' }),
    mac_vendors: z.string().exactOptional().openapi({ example: 'Dell' }),
    macs: z.mac().exactOptional().openapi({ example: '11:22:33:44:55:66' }),
    name: z.string().exactOptional().openapi({ example: 'www;server' }),
    newest_mac_age: z.string().exactOptional().openapi({ example: '2020-01-01' }),
    organization: z.string().exactOptional().openapi({ example: 'Headquarters' }),
    os_product: z.string().exactOptional().openapi({ example: 'Windows 10' }),
    os_vendor: z.string().exactOptional().openapi({ example: 'Microsoft' }),
    os_version: z.string().exactOptional().openapi({ example: 1903 }),
    service_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    service_count_arp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_icmp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_tcp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 7 }),
    service_count_udp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    site: z.string().exactOptional().openapi({ example: 'Primary' }),
    sys_class_name: z.string().exactOptional().openapi({ example: 'cmdb_ci_iot' }),
    tags: z.string().exactOptional().openapi({ example: 'owner=IT;location=Austin' }),
    type: z.string().exactOptional().openapi({ example: 'Server' }),
  })
  .openapi({ required: ['asset_id'] })
  .openapi('AssetServiceNow')

const AssetTagsSchema = z
  .object({ tags: z.string().openapi({ example: 'ThisTag=Value -OldTag' }) })
  .openapi({ required: ['tags'] })
  .openapi('AssetTags')

const AssetTagsWithSearchSchema = z
  .object({
    search: z.string().openapi({ example: 'alive:true and os:windows' }),
    tags: z.string().openapi({ example: 'ThisTag=Value -OldTag' }),
  })
  .openapi({ required: ['tags', 'search'] })
  .openapi('AssetTagsWithSearch')

const AssetsWithCheckpointSchema = z
  .object({
    assets: z.array(AssetSchema),
    since: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['since', 'assets'] })
  .openapi('AssetsWithCheckpoint')

const ComponentVersionSchema = z
  .object({
    id: z.string().openapi({ example: 'agent' }),
    version: z.string().openapi({ example: '1.0.0' }),
  })
  .openapi({ description: 'A component ID and version', required: ['id', 'version'] })
  .openapi('ComponentVersion')

const CredentialSchema = z
  .object({
    acl: z
      .looseObject({})
      .exactOptional()
      .openapi({ example: { 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8': 'user' } }),
    cidrs: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['10.0.0.47/32', '192.168.1.0/24'] }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by_email: z.email().exactOptional().openapi({ example: 'user@example.com' }),
    created_by_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    global: z.boolean().exactOptional().openapi({ example: false }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_used_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_used_by_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    name: z.string().exactOptional().openapi({ example: 'credentials_name' }),
    type: z
      .enum([
        'miradore_api_key_v1',
        'aws_access_secret',
        'crowdstrike_api_key',
        'azure_client_secret',
        'azure_username_password',
        'censys_search_api_key',
        'snmpv2_community',
        'snmpv3_credential',
        'vmware_username_password',
      ])
      .exactOptional()
      .openapi({ description: 'The service the credentials are for.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('Credential')

const CredentialFieldsSchema: z.ZodType<CredentialFieldsType> = z
  .lazy(() =>
    z.xor([
      MiradoreCredentialFieldsSchema,
      AWSCredentialFieldsSchema,
      AzureClientSecretCredentialFieldsSchema,
      AzureUsernamePasswordCredentialFieldsSchema,
      CrowdstrikeCredentialFieldsSchema,
      CensysCredentialFieldsSchema,
      SNMPv2CommunitiesCredentialFieldsSchema,
      SNMPv3CredentialFieldsSchema,
      VMwareCredentialFieldsSchema,
    ]),
  )
  .openapi('CredentialFields')

const CredentialOptionsSchema = z
  .object({
    acl: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: {
          'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8': 'user',
          'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa9': 'none',
        },
      }),
    cidrs: z.string().exactOptional().openapi({ example: '10.0.0.17/32, 192.168.1.0/24' }),
    global: z.boolean().exactOptional().openapi({ example: false }),
    name: z.string().exactOptional().openapi({ example: 'credentials_name' }),
    secret: CredentialFieldsSchema.exactOptional(),
    type: z
      .enum(['miradore_api_key_v1', 'aws_access_secret'])
      .exactOptional()
      .openapi({ example: 'miradore_api_key_v1' }),
  })
  .openapi({ required: [] })
  .openapi('CredentialOptions')

const EventSchema = z
  .object({
    action: z.string().exactOptional().openapi({ example: 'login' }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    details: z.looseObject({}).exactOptional(),
    id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    processed_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    processor_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    source_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    source_name: z.string().exactOptional().openapi({ example: 'SiteName' }),
    source_type: z.string().exactOptional().openapi({ example: 'api' }),
    state: z.string().exactOptional().openapi({ example: 'SiteName' }),
    success: z.boolean().exactOptional().openapi({ example: true }),
    target_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    target_name: z.string().exactOptional().openapi({ example: 'SiteName' }),
    target_type: z.string().exactOptional().openapi({ example: 'api' }),
  })
  .openapi({ required: [] })
  .openapi('Event')

const GroupSchema = z
  .object({
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by_email: z.string().exactOptional().openapi({ example: 'jsmith@example.com' }),
    description: z.string().exactOptional().openapi({ example: 'Viewers Group' }),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    name: z.string().exactOptional().openapi({ example: 'Viewers' }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z.looseObject({}).exactOptional(),
    role_summary: z.string().exactOptional().openapi({ example: 'all:viewer' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    user_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
  })
  .openapi({ required: ['id'] })
  .openapi('Group')

const GroupMappingSchema = z
  .object({
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by_email: z.string().exactOptional().openapi({ example: 'jsmith@example.com' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Maps basic-attribute to Viewers Group' }),
    group_id: z.uuid().openapi({ example: '2b096711-4d28-4417-8635-64af4f62c1ae' }),
    group_name: z.string().exactOptional().openapi({ example: 'Viewers Group' }),
    id: z.uuid().openapi({ example: 'f6cfb91a-52ea-4a86-bf9a-5a891a26f52b' }),
    sso_attribute: z.string().openapi({ example: 'basic-attribute' }),
    sso_value: z.string().openapi({ example: 'basic-attribute-value' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'group_id', 'sso_attribute', 'sso_value'] })
  .openapi('GroupMapping')

const GroupPostSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: 'Viewers Group' }),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    name: z.string().exactOptional().openapi({ example: 'Viewers' }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: {
          '1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf': 'viewer',
          'fd6d6662-732b-4c4b-8331-051178994384': 'admin',
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupPost')

const GroupPutSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: 'Viewers Group' }),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    name: z.string().exactOptional().openapi({ example: 'Viewers' }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: {
          '1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf': 'viewer',
          'fd6d6662-732b-4c4b-8331-051178994384': 'admin',
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupPut')

const LicenseSchema = z
  .object({
    activated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    address_city: z.string().exactOptional().openapi({ example: 'Austin' }),
    address_country: z.string().exactOptional().openapi({ example: 'US' }),
    address_postal: z.string().exactOptional().openapi({ example: 78700 }),
    address_region: z.string().exactOptional().openapi({ example: 'Texas' }),
    address_street: z.string().exactOptional().openapi({ example: '1111 Main St' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    license_expiration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    license_live_asset_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1000 }),
    license_max_assets: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1000000 }),
    license_project_asset_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 5000 }),
    license_type: z.string().exactOptional().openapi({ example: 'platform' }),
    name: z.string().exactOptional().openapi({ example: 'My Company' }),
    partner: z.string().exactOptional().openapi({ example: 'Rumble' }),
    phone: z.string().exactOptional().openapi({ example: '512-555-5555' }),
    settings: z.looseObject({}).exactOptional(),
    sso_default_role: z.string().exactOptional().openapi({ example: 'viewer' }),
    sso_domain: z.string().exactOptional().openapi({ example: 'rumble.run' }),
    sso_login_issuer_url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://accounts.google.com/o/saml2?idpid=issuer' }),
    sso_login_login_url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://accounts.google.com/o/saml2?idpid=login' }),
    sso_login_logout_url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://accounts.google.com/o/saml2?idpid=logout' }),
    sso_login_message: z.string().exactOptional().openapi({ example: 'Hello' }),
    sso_mode: z.string().exactOptional().openapi({ example: 'required' }),
    sso_type: z.string().exactOptional().openapi({ example: 'saml20' }),
    subscription_cancel_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    subscription_canceled_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    subscription_period_end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    subscription_period_start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    via_reseller: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('License')

const OrgOptionsSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: 'Wobbly Widgets, Inc.' }),
    expiration_assets_offline: z.string().exactOptional().openapi({ example: '365' }),
    expiration_assets_stale: z.string().exactOptional().openapi({ example: '365' }),
    expiration_scans: z.string().exactOptional().openapi({ example: '365' }),
    export_token: z.string().exactOptional().openapi({ example: 'ETXXXXXXXXXXXXXXXX' }),
    name: z.string().exactOptional().openapi({ example: 'My Organization' }),
    parent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    project: z.string().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('OrgOptions')

const OrganizationSchema = z
  .object({
    asset_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 100 }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    deactivated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    description: z.string().exactOptional().openapi({ example: 'All subdivisions of my company' }),
    download_token: z
      .string()
      .exactOptional()
      .openapi({ example: 'DT11226D9EEEA2B035D42569585900' }),
    download_token_created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    expiration_assets_offline: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 365 }),
    expiration_assets_stale: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 365 }),
    expiration_scans: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 365 }),
    export_token: z.string().exactOptional().openapi({ example: 'ET11226D9EEEA2B035D42569585900' }),
    export_token_counter: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    export_token_created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    export_token_last_used_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    export_token_last_used_by: z.string().exactOptional().openapi({ example: '127.0.0.1' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    inactive: z.boolean().exactOptional().openapi({ example: false }),
    name: z.string().openapi({ example: 'My Company' }),
    parent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    permanent: z.boolean().exactOptional().openapi({ example: true }),
    project: z.boolean().exactOptional().openapi({ example: false }),
    service_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    service_count_arp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_icmp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_tcp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 7 }),
    service_count_udp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Organization')

const ScanOptionsSchema = z
  .object({
    agent: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    excludes: z.string().exactOptional(),
    'host-ping': z.string().exactOptional().openapi({ example: 'false' }),
    'max-attempts': z.string().exactOptional().openapi({ example: '3' }),
    'max-group-size': z.string().exactOptional().openapi({ example: '4096' }),
    'max-host-rate': z.string().exactOptional().openapi({ example: '100' }),
    'max-sockets': z.string().exactOptional().openapi({ example: '500' }),
    'max-ttl': z.string().exactOptional().openapi({ example: '255' }),
    nameservers: z.string().exactOptional().openapi({ example: '8.8.8.8' }),
    passes: z.string().exactOptional().openapi({ example: '3' }),
    probes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional probe list, otherwise all probes are used',
        example:
          'arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd',
      }),
    rate: z.string().exactOptional().openapi({ example: '10000' }),
    'scan-description': z.string().exactOptional().openapi({ example: 'Scan of Wireless' }),
    'scan-frequency': z
      .enum(['once', 'hourly', 'daily', 'weekly', 'monthly', 'continuous'])
      .exactOptional(),
    'scan-grace-period': z.string().exactOptional().openapi({ example: '4' }),
    'scan-name': z.string().exactOptional().openapi({ example: 'My Scan' }),
    'scan-start': z.string().exactOptional().openapi({ example: '0' }),
    'scan-tags': z.string().exactOptional().openapi({ example: 'owner=IT location=Texas' }),
    screenshots: z.string().exactOptional().openapi({ example: 'true' }),
    'subnet-ping': z.string().exactOptional().openapi({ example: 'true' }),
    'subnet-ping-net-size': z.string().exactOptional().openapi({ example: '256' }),
    'subnet-ping-sample-rate': z.string().exactOptional().openapi({ example: '3' }),
    targets: z.string().openapi({ example: 'defaults' }),
    'tcp-excludes': z.string().exactOptional().openapi({ example: '9500' }),
    'tcp-ports': z.string().exactOptional().openapi({ example: '1-1000,5000-6000' }),
  })
  .openapi({ required: ['targets'] })
  .openapi('ScanOptions')

const ScanTemplateSchema = z
  .object({
    acl: z.looseObject({}).openapi({ example: { 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8': 'user' } }),
    agent_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by: z.email().exactOptional().openapi({ example: 'user@example.com' }),
    created_by_user_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    cruncher_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    description: z.string().exactOptional().openapi({ example: 'My Scan Template' }),
    error: z.string().exactOptional().openapi({ example: 'agent unavailable' }),
    global: z.boolean().openapi({ example: false }),
    grace_period: z.string().exactOptional().openapi({ example: '4' }),
    hidden: z.boolean().exactOptional().openapi({ example: false }),
    hosted_zone_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    linked_task_count: z.int32().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional().openapi({ example: 'My Scan Template' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    params: z.record(z.string(), z.string()).exactOptional(),
    parent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    recur: z.boolean().exactOptional().openapi({ example: false }),
    recur_frequency: z.string().exactOptional().openapi({ example: 'hour' }),
    recur_last: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    recur_last_task_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    recur_next: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    size_data: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    size_results: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    size_site: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    source_id: z.string().exactOptional().openapi({ example: '1' }),
    start_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    stats: z.looseObject({}).exactOptional(),
    status: z.string().exactOptional().openapi({ example: 'processed' }),
    template_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    type: z.string().exactOptional().openapi({ example: 'scan' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'global', 'acl'] })
  .openapi('ScanTemplate')

const ScanTemplateOptionsSchema = z
  .object({
    acl: z.looseObject({}).openapi({ example: { 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8': 'user' } }),
    description: z.string().exactOptional().openapi({ example: 'My Scan Template' }),
    global: z.boolean().openapi({ example: false }),
    name: z.string().openapi({ example: 'My Scan Template' }),
    params: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: ['name', 'global', 'acl'] })
  .openapi('ScanTemplateOptions')

const SearchSchema = z
  .object({ search: z.string().openapi({ example: 'alive:true and os:windows' }) })
  .openapi({ required: ['search'] })
  .openapi('Search')

const ServiceSchema = z
  .object({
    addresses: z.array(z.string().openapi({ example: '192.168.0.1' })).exactOptional(),
    addresses_extra: z.array(z.string().openapi({ example: '192.168.100.1' })).exactOptional(),
    agent_name: z.string().exactOptional().openapi({ example: 'LAPTOP-F4P1R6' }),
    alive: z.boolean().exactOptional().openapi({ example: true }),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    comments: z.string().exactOptional().openapi({ example: 'File Server' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    credentials: z.record(z.string(), z.string()).exactOptional(),
    detected_by: z.string().exactOptional().openapi({ example: 'icmp' }),
    domains: z.array(z.string().openapi({ example: 'CORPNET' })).exactOptional(),
    first_seen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    hw: z.string().exactOptional().openapi({ example: 'Dell PowerEdge 2500' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_agent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_seen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_task_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    lowest_rtt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    lowest_ttl: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    mac_vendors: z.array(z.string().openapi({ example: 'Dell' })).exactOptional(),
    macs: z.array(z.mac().openapi({ example: '11:22:33:44:55:66' })).exactOptional(),
    names: z.array(z.string().openapi({ example: 'www' })).exactOptional(),
    newest_mac: z.mac().exactOptional().openapi({ example: '11:22:33:44:55:66' }),
    newest_mac_age: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1304035200000000000 }),
    newest_mac_vendor: z.string().exactOptional().openapi({ example: 'Intel Corporate' }),
    org_name: z.string().exactOptional().openapi({ example: 'Test Labs' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    os: z.string().exactOptional().openapi({ example: 'Ubuntu Linux' }),
    os_version: z.string().exactOptional().openapi({ example: 18.04 }),
    rtts: z.looseObject({}).exactOptional(),
    service_address: z.string().exactOptional().openapi({ example: '192.168.0.1' }),
    service_asset_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    service_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    service_count_arp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_icmp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_count_tcp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 7 }),
    service_count_udp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    service_created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    service_data: z.record(z.string(), z.string()).exactOptional(),
    service_id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    service_link: z.string().exactOptional().openapi({ example: 'http://192.168.0.1:80/' }),
    service_port: z.string().exactOptional().openapi({ example: 80 }),
    service_ports_products: z.array(z.string().openapi({ example: 'bind' })).exactOptional(),
    service_ports_protocols: z.array(z.string().openapi({ example: 'ssh' })).exactOptional(),
    service_ports_tcp: z.array(z.string().openapi({ example: 22 })).exactOptional(),
    service_ports_udp: z.array(z.string().openapi({ example: 53 })).exactOptional(),
    service_protocol: z.string().exactOptional().openapi({ example: 'http tls' }),
    service_screenshot_link: z.string().exactOptional(),
    service_summary: z.string().exactOptional().openapi({ example: 'Login Page' }),
    service_transport: z.string().exactOptional().openapi({ example: 'tcp' }),
    service_updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    service_vhost: z.string().exactOptional().openapi({ example: 'www' }),
    services: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    site_name: z.string().exactOptional().openapi({ example: 'Primary' }),
    tags: z.record(z.string(), z.string()).exactOptional(),
    type: z.string().exactOptional().openapi({ example: 'Server' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'service_id'] })
  .openapi('Service')

const SiteSchema = z
  .object({
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    description: z.string().exactOptional().openapi({ example: 'Headquarters' }),
    excludes: z.string().exactOptional().openapi({ example: '192.168.0.5' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    name: z.string().openapi({ example: 'Primary' }),
    permanent: z.boolean().exactOptional().openapi({ example: true }),
    scope: z.string().exactOptional().openapi({ example: '192.168.0.0/24' }),
    subnets: z.looseObject({}).exactOptional(),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Site')

const SiteOptionsSchema = z
  .object({
    description: z.string().exactOptional().openapi({ example: 'County Office' }),
    excludes: z.string().exactOptional().openapi({ example: '192.168.10.1' }),
    name: z.string().openapi({ example: 'New Site' }),
    scope: z.string().exactOptional().openapi({ example: '192.168.10.0/24' }),
  })
  .openapi({ required: ['name'] })
  .openapi('SiteOptions')

const StatusMessageSchema = z.object({}).openapi('StatusMessage')

const TaskSchema = z
  .object({
    agent_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    created_by: z.email().exactOptional().openapi({ example: 'user@example.com' }),
    created_by_user_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    cruncher_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    description: z.string().exactOptional().openapi({ example: 'Scan the headquarters hourly' }),
    error: z.string().exactOptional().openapi({ example: 'agent unavailable' }),
    hidden: z.boolean().exactOptional().openapi({ example: false }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    name: z.string().exactOptional().openapi({ example: 'Hourly Scan' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    params: z.record(z.string(), z.string()).exactOptional(),
    parent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    recur: z.boolean().exactOptional().openapi({ example: false }),
    recur_frequency: z.string().exactOptional().openapi({ example: 'hour' }),
    recur_last: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    recur_last_task_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    recur_next: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    start_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    stats: z.looseObject({}).exactOptional(),
    status: z.string().exactOptional().openapi({ example: 'processed' }),
    template_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    type: z.string().exactOptional().openapi({ example: 'scan' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id'] })
  .openapi('Task')

const URLSchema = z
  .object({ id: z.url().exactOptional().openapi({ example: 'https://www.rumble.run/docs/' }) })
  .openapi({ description: 'A URL to a resource', required: ['url'] })
  .openapi('URL')

const UserSchema = z
  .object({
    client_admin: z.boolean().exactOptional().openapi({ example: true }),
    client_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    email: z.string().exactOptional().openapi({ example: 'jsmith@example.com' }),
    first_name: z.string().exactOptional().openapi({ example: 'James' }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    invite_token_expiration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_login_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_login_ip: z.string().exactOptional().openapi({ example: '192.168.0.1' }),
    last_login_ua: z.string().exactOptional().openapi({ example: 'curl/1.0' }),
    last_name: z.string().exactOptional().openapi({ example: 'Smith' }),
    login_failures: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z.looseObject({}).exactOptional(),
    reset_token_expiration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    sso_only: z.boolean().exactOptional().openapi({ example: false }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
  })
  .openapi({ required: ['id'] })
  .openapi('User')

const UserInviteOptionsSchema = z
  .object({
    client_admin: z.boolean().exactOptional().openapi({ example: true }),
    email: z.string().exactOptional().openapi({ example: 'jsmith@example.com' }),
    first_name: z.string().exactOptional().openapi({ example: 'James' }),
    last_name: z.string().exactOptional().openapi({ example: 'Smith' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'You have been invited to the Rumble Network Discovery platform' }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z.looseObject({}).exactOptional(),
    subject: z.string().exactOptional().openapi({ example: 'Welcome to Rumble' }),
  })
  .openapi({ required: [] })
  .openapi('UserInviteOptions')

const UserOptionsSchema = z
  .object({
    client_admin: z.boolean().exactOptional().openapi({ example: true }),
    email: z.string().exactOptional().openapi({ example: 'jsmith@example.com' }),
    first_name: z.string().exactOptional().openapi({ example: 'James' }),
    last_name: z.string().exactOptional().openapi({ example: 'Smith' }),
    org_default_role: z.string().exactOptional().openapi({ example: 'admin' }),
    org_roles: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserOptions')

const WirelessSchema = z
  .object({
    agent_name: z.string().exactOptional().openapi({ example: 'LAPTOP-F4P1R6' }),
    authentication: z.string().exactOptional().openapi({ example: 'wpa2-psk' }),
    bssid: z.mac().exactOptional().openapi({ example: '11:22:33:44:55:66' }),
    channels: z.string().exactOptional().openapi({ example: '11, 158+1' }),
    created_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    data: z.record(z.string(), z.string()).exactOptional(),
    encryption: z.string().exactOptional().openapi({ example: 'aes' }),
    essid: z.uuid().exactOptional().openapi({ example: 'Free WiFi' }),
    family: z.string().exactOptional().openapi({ example: 223344 }),
    id: z.uuid().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    interface: z.string().exactOptional().openapi({ example: 'wlan0' }),
    last_agent_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    last_seen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1576300370 }),
    last_task_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    org_name: z.string().exactOptional().openapi({ example: 'Test Labs' }),
    organization_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    signal: z.int().min(0).max(100).exactOptional().openapi({ example: 99 }),
    site_id: z.uuid().exactOptional().openapi({ example: 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8' }),
    site_name: z.string().exactOptional().openapi({ example: 'Primary' }),
    type: z.string().exactOptional().openapi({ example: 'infrastructure' }),
    vendor: z.string().exactOptional().openapi({ example: 'Ubiquiti Networks' }),
  })
  .openapi({ required: ['id'] })
  .openapi('Wireless')

const LicenseExpiredErrorResponse = { description: 'License has expired' }

const NotFoundErrorResponse = { description: 'Resource not found' }

const ProcessingErrorResponse = { description: 'Request could not be processed' }

const StatusMessageResponse = { description: 'Summary of operation results' }

const UnauthorizedErrorResponse = { description: 'Access token is missing or invalid' }

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getAccountAgentsRoute = createRoute({
  method: 'get',
  path: '/account/agents',
  tags: ['Account'],
  summary: 'Get all agents across all organizations',
  operationId: 'getAccountAgents',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of tasks',
      content: { 'application/json': { schema: z.array(AgentSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountCredentialsRoute = createRoute({
  method: 'get',
  path: '/account/credentials',
  tags: ['Account'],
  summary: 'Get all account credentials',
  operationId: 'getAccountCredentials',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of credentials',
      content: { 'application/json': { schema: z.array(CredentialSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountCredentialsRoute = createRoute({
  method: 'put',
  path: '/account/credentials',
  tags: ['Account'],
  summary: 'Create a new credential',
  operationId: 'createAccountCredential',
  request: {
    body: {
      description: 'credential parameters',
      content: { 'application/json': { schema: CredentialOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'credential details',
      content: { 'application/json': { schema: CredentialSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountCredentialsCredentialIdRoute = createRoute({
  method: 'get',
  path: '/account/credentials/{credential_id}',
  tags: ['Account'],
  summary: 'Get credential details',
  operationId: 'getAccountCredential',
  request: {
    params: z.object({
      credential_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the credential to retrieve',
            in: 'path',
            name: 'credential_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'credential details',
      content: { 'application/json': { schema: CredentialSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountCredentialsCredentialIdRoute = createRoute({
  method: 'delete',
  path: '/account/credentials/{credential_id}',
  tags: ['Account'],
  summary: 'Remove this credential',
  operationId: 'removeAccountCredential',
  request: {
    params: z.object({
      credential_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the credential to delete',
            in: 'path',
            name: 'credential_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountEventsJsonRoute = createRoute({
  method: 'get',
  path: '/account/events.json',
  tags: ['Account'],
  summary: 'System event log as JSON',
  operationId: 'exportEventsJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered event results',
      content: { 'application/json': { schema: z.array(EventSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountEventsJsonlRoute = createRoute({
  method: 'get',
  path: '/account/events.jsonl',
  tags: ['Account'],
  summary: 'System event log as JSON line-delimited',
  operationId: 'exportEventsJSONL',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered event results',
      content: { 'application/json': { schema: z.array(EventSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountGroupsRoute = createRoute({
  method: 'get',
  path: '/account/groups',
  tags: ['Account'],
  summary: 'Get all groups',
  operationId: 'getAccountGroups',
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: GroupSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountGroupsRoute = createRoute({
  method: 'put',
  path: '/account/groups',
  tags: ['Account'],
  summary: 'Update an existing group',
  operationId: 'updateAccountGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupPutSchema } }, required: true },
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: GroupSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postAccountGroupsRoute = createRoute({
  method: 'post',
  path: '/account/groups',
  tags: ['Account'],
  summary: 'Create a new group',
  operationId: 'createAccountGroup',
  request: {
    body: { content: { 'application/json': { schema: GroupPostSchema } }, required: true },
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: GroupSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/account/groups/{group_id}',
  tags: ['Account'],
  summary: 'Get group details',
  operationId: 'getAccountGroup',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the group',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: GroupSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/account/groups/{group_id}',
  tags: ['Account'],
  summary: 'Remove this group',
  operationId: 'removeAccountGroup',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the group',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const getAccountKeysRoute = createRoute({
  method: 'get',
  path: '/account/keys',
  tags: ['Account'],
  summary: 'Get all active API keys',
  operationId: 'getAccountKeys',
  responses: {
    200: {
      description: 'array of keys',
      content: { 'application/json': { schema: z.array(APIKeySchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountKeysRoute = createRoute({
  method: 'put',
  path: '/account/keys',
  tags: ['Account'],
  summary: 'Create a new key',
  operationId: 'createAccountKey',
  request: {
    body: {
      description: 'key parameters',
      content: { 'application/json': { schema: APIKeyOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'key details', content: { 'application/json': { schema: APIKeySchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/account/keys/{key_id}',
  tags: ['Account'],
  summary: 'Get key details',
  operationId: 'getAccountKey',
  request: {
    params: z.object({
      key_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the key to retrieve',
            in: 'path',
            name: 'key_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: APIKeySchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/account/keys/{key_id}',
  tags: ['Account'],
  summary: 'Remove this key',
  operationId: 'removeAccountKey',
  request: {
    params: z.object({
      key_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the key to retrieve',
            in: 'path',
            name: 'key_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const patchAccountKeysKeyIdRotateRoute = createRoute({
  method: 'patch',
  path: '/account/keys/{key_id}/rotate',
  tags: ['Account'],
  summary: 'Rotates the key secret',
  operationId: 'rotateAccountKey',
  request: {
    params: z.object({
      key_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the key to retrieve',
            in: 'path',
            name: 'key_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'key details', content: { 'application/json': { schema: APIKeySchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountLicenseRoute = createRoute({
  method: 'get',
  path: '/account/license',
  tags: ['Account'],
  summary: 'Get license details',
  operationId: 'getAccountLicense',
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: LicenseSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountOrgsRoute = createRoute({
  method: 'get',
  path: '/account/orgs',
  tags: ['Account'],
  summary: 'Get all organization details',
  operationId: 'getAccountOrganizations',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of organizations',
      content: { 'application/json': { schema: z.array(OrganizationSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountOrgsRoute = createRoute({
  method: 'put',
  path: '/account/orgs',
  tags: ['Account'],
  summary: 'Create a new organization',
  operationId: 'createAccountOrganization',
  request: {
    body: {
      description: 'organization definition',
      content: { 'application/json': { schema: OrgOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountOrgsOrgIdRoute = createRoute({
  method: 'get',
  path: '/account/orgs/{org_id}',
  tags: ['Account'],
  summary: 'Get organization details',
  operationId: 'getAccountOrganization',
  request: {
    params: z.object({
      org_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the organization to retrieve',
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Automatically created',
      content: { '*/*': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountOrgsOrgIdRoute = createRoute({
  method: 'delete',
  path: '/account/orgs/{org_id}',
  tags: ['Account'],
  summary: 'Remove this organization',
  operationId: 'removeAccountOrganization',
  request: {
    params: z.object({
      org_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the organization to retrieve',
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const patchAccountOrgsOrgIdRoute = createRoute({
  method: 'patch',
  path: '/account/orgs/{org_id}',
  tags: ['Account'],
  summary: 'Update organization details',
  operationId: 'updateAccountOrganization',
  request: {
    params: z.object({
      org_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the organization to retrieve',
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'organization options',
      content: { 'application/json': { schema: OrgOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountOrgsOrgIdExportTokenRoute = createRoute({
  method: 'delete',
  path: '/account/orgs/{org_id}/exportToken',
  tags: ['Account'],
  summary: 'Removes the export token from the specified organization',
  operationId: 'deleteAccountOrganizationExportToken',
  request: {
    params: z.object({
      org_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the organization to retrieve',
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const patchAccountOrgsOrgIdExportTokenRotateRoute = createRoute({
  method: 'patch',
  path: '/account/orgs/{org_id}/exportToken/rotate',
  tags: ['Account'],
  summary: 'Rotates the organization export token and returns the updated organization',
  operationId: 'rotateAccountOrganizationExportToken',
  request: {
    params: z.object({
      org_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the organization to retrieve',
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountSitesRoute = createRoute({
  method: 'get',
  path: '/account/sites',
  tags: ['Account'],
  summary: 'Get all sites details across all organizations',
  operationId: 'getAccountSites',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of sites',
      content: { 'application/json': { schema: z.array(SiteSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountSsoGroupsRoute = createRoute({
  method: 'get',
  path: '/account/sso/groups',
  tags: ['Account'],
  summary: 'Get all SSO group mappings',
  operationId: 'getAccountGroupMappings',
  responses: {
    200: {
      description: 'Automatically created',
      content: { '*/*': { schema: GroupMappingSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountSsoGroupsRoute = createRoute({
  method: 'put',
  path: '/account/sso/groups',
  tags: ['Account'],
  summary: 'Update an existing SSO group mapping',
  operationId: 'updateAccountGroupMapping',
  request: {
    body: { content: { 'application/json': { schema: GroupMappingSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Automatically created',
      content: { '*/*': { schema: GroupMappingSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postAccountSsoGroupsRoute = createRoute({
  method: 'post',
  path: '/account/sso/groups',
  tags: ['Account'],
  summary: 'Create a new SSO group mapping',
  operationId: 'createAccountGroupMapping',
  request: {
    body: { content: { 'application/json': { schema: GroupMappingSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Automatically created',
      content: { '*/*': { schema: GroupMappingSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountSsoGroupsGroupMappingIdRoute = createRoute({
  method: 'get',
  path: '/account/sso/groups/{group_mapping_id}',
  tags: ['Account'],
  summary: 'Get SSO group mapping details',
  operationId: 'getAccountGroupMapping',
  request: {
    params: z.object({
      group_mapping_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the SSO group mapping',
            in: 'path',
            name: 'group_mapping_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Automatically created',
      content: { '*/*': { schema: GroupMappingSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountSsoGroupsGroupMappingIdRoute = createRoute({
  method: 'delete',
  path: '/account/sso/groups/{group_mapping_id}',
  tags: ['Account'],
  summary: 'Remove this SSO group mapping',
  operationId: 'removeAccountGroupMapping',
  request: {
    params: z.object({
      group_mapping_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the SSO group mapping',
            in: 'path',
            name: 'group_mapping_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const getAccountTasksRoute = createRoute({
  method: 'get',
  path: '/account/tasks',
  tags: ['Account'],
  summary: 'Get all task details across all organizations (up to 1000)',
  operationId: 'getAccountTasks',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of tasks',
      content: { 'application/json': { schema: z.array(TaskSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountTasksTemplatesRoute = createRoute({
  method: 'get',
  path: '/account/tasks/templates',
  tags: ['Account'],
  summary: 'Get all scan templates across all organizations (up to 1000)',
  operationId: 'getAccountScanTemplates',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of scan templates',
      content: { 'application/json': { schema: z.array(ScanTemplateSchema) } },
    },
    401: UnauthorizedErrorResponse,
    422: { description: 'failed to parse search string' },
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountTasksTemplatesRoute = createRoute({
  method: 'put',
  path: '/account/tasks/templates',
  tags: ['Account'],
  summary: 'Update scan template',
  operationId: 'updateAccountScanTemplate',
  request: {
    body: { content: { 'application/json': { schema: ScanTemplateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'scan template',
      content: { 'application/json': { schema: ScanTemplateSchema } },
    },
    400: { description: 'invalid request body' },
    401: UnauthorizedErrorResponse,
    404: { description: 'scan template or permissions not found' },
    422: { description: 'invalid request body' },
  },
  security: [{ bearerAuth: [] }],
})

export const postAccountTasksTemplatesRoute = createRoute({
  method: 'post',
  path: '/account/tasks/templates',
  tags: ['Account'],
  summary: 'Create a new scan template',
  operationId: 'createAccountScanTemplate',
  request: {
    body: {
      content: { 'application/json': { schema: ScanTemplateOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'scan template',
      content: { 'application/json': { schema: ScanTemplateSchema } },
    },
    400: { description: 'invalid request body' },
    401: UnauthorizedErrorResponse,
    422: { description: 'invalid request body' },
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountTasksTemplatesScanTemplateIdRoute = createRoute({
  method: 'get',
  path: '/account/tasks/templates/{scan_template_id}',
  tags: ['Account'],
  summary: 'Get scan template details',
  operationId: 'getAccountScanTemplate',
  request: {
    params: z.object({
      scan_template_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the scan template to retrieve',
            in: 'path',
            name: 'scan_template_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'scan template',
      content: { 'application/json': { schema: ScanTemplateSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: { description: 'scan template not found' },
    422: { description: 'invalid scan template id' },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountTasksTemplatesScanTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/account/tasks/templates/{scan_template_id}',
  tags: ['Account'],
  summary: 'Remove scan template',
  operationId: 'removeAccountScanTemplate',
  request: {
    params: z.object({
      scan_template_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the scan template to remove',
            in: 'path',
            name: 'scan_template_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'scan template',
      content: { 'application/json': { schema: ScanTemplateSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: { description: 'scan template not found' },
    422: { description: 'invalid request' },
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountUsersRoute = createRoute({
  method: 'get',
  path: '/account/users',
  tags: ['Account'],
  summary: 'Get all users',
  operationId: 'getAccountUsers',
  responses: {
    200: {
      description: 'array of users',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountUsersRoute = createRoute({
  method: 'put',
  path: '/account/users',
  tags: ['Account'],
  summary: 'Create a new user account',
  operationId: 'createAccountUser',
  request: {
    body: {
      description: 'user parameters',
      content: { 'application/json': { schema: UserOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'key details', content: { 'application/json': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putAccountUsersInviteRoute = createRoute({
  method: 'put',
  path: '/account/users/invite',
  tags: ['Account'],
  summary: 'Create a new user account and send an email invite',
  operationId: 'createAccountUserInvite',
  request: {
    body: {
      description: 'user invite parameters',
      content: { 'application/json': { schema: UserInviteOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'key details', content: { 'application/json': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getAccountUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/account/users/{user_id}',
  tags: ['Account'],
  summary: 'Get user details',
  operationId: 'getAccountUser',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to retrieve',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAccountUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/account/users/{user_id}',
  tags: ['Account'],
  summary: 'Remove this user',
  operationId: 'removeAccountUser',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to delete',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const patchAccountUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/account/users/{user_id}',
  tags: ['Account'],
  summary: "Update a user's details",
  operationId: 'updateAccountUser',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to retrieve',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'user parameters',
      content: { 'application/json': { schema: UserOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchAccountUsersUserIdResetLockoutRoute = createRoute({
  method: 'patch',
  path: '/account/users/{user_id}/resetLockout',
  tags: ['Account'],
  summary: "Resets the user's lockout status",
  operationId: 'resetAccountUserLockout',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to retrieve',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchAccountUsersUserIdResetMFARoute = createRoute({
  method: 'patch',
  path: '/account/users/{user_id}/resetMFA',
  tags: ['Account'],
  summary: "Resets the user's MFA tokens",
  operationId: 'resetAccountUserMFA',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to retrieve',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchAccountUsersUserIdResetPasswordRoute = createRoute({
  method: 'patch',
  path: '/account/users/{user_id}/resetPassword',
  tags: ['Account'],
  summary: 'Sends the user a password reset email',
  operationId: 'resetAccountUserPassword',
  request: {
    params: z.object({
      user_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the user to retrieve',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: UserSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsCiscoCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.cisco.csv',
  tags: ['Cisco SNTC'],
  summary: 'Cisco serial number and model name export for Cisco Smart Net Total Care Service.',
  operationId: 'exportAssetsCiscoCSV',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.csv',
  tags: ['Export'],
  summary: 'Asset inventory as CSV',
  operationId: 'exportAssetsCSV',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.json',
  tags: ['Export'],
  summary: 'Exports the asset inventory',
  operationId: 'exportAssetsJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results',
      content: { 'application/json': { schema: z.array(AssetSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsJsonlRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.jsonl',
  tags: ['Export'],
  summary: 'Asset inventory as JSON line-delimited',
  operationId: 'exportAssetsJSONL',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsNmapXmlRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.nmap.xml',
  tags: ['Export'],
  summary: 'Asset inventory as Nmap-style XML',
  operationId: 'exportAssetsNmapXML',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results',
      content: { 'text/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsServicenowCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.servicenow.csv',
  tags: ['ServiceNow'],
  summary: 'Export an asset inventory as CSV for ServiceNow integration',
  operationId: 'snowExportAssetsCSV',
  responses: {
    200: {
      description: 'asset export',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsServicenowJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/assets.servicenow.json',
  tags: ['ServiceNow'],
  summary: 'Exports the asset inventory as JSON',
  operationId: 'snowExportAssetsJSON',
  responses: {
    200: {
      description: 'filtered asset results',
      content: { 'application/json': { schema: z.array(AssetServiceNowSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsSyncCreatedAssetsJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/assets/sync/created/assets.json',
  tags: ['Splunk'],
  summary:
    'Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.',
  operationId: 'splunkAssetSyncCreatedJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional unix timestamp to use as a checkpoint',
            in: 'query',
            name: 'since',
            required: false,
            schema: { example: 1576300370, format: 'int64', type: 'integer' },
          },
          example: 1576300370,
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results with a checkpoint wrapper',
      content: { 'application/json': { schema: AssetsWithCheckpointSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgAssetsSyncUpdatedAssetsJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/assets/sync/updated/assets.json',
  tags: ['Splunk'],
  summary:
    'Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.',
  operationId: 'splunkAssetSyncUpdatedJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional unix timestamp to use as a checkpoint',
            in: 'query',
            name: 'since',
            required: false,
            schema: { example: 1576300370, format: 'int64', type: 'integer' },
          },
          example: 1576300370,
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered asset results with a checkpoint wrapper',
      content: { 'application/json': { schema: AssetsWithCheckpointSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgServicesCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/services.csv',
  tags: ['Export'],
  summary: 'Service inventory as CSV',
  operationId: 'exportServicesCSV',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered service results',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgServicesJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/services.json',
  tags: ['Export'],
  summary: 'Service inventory as JSON',
  operationId: 'exportServicesJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered service results',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgServicesJsonlRoute = createRoute({
  method: 'get',
  path: '/export/org/services.jsonl',
  tags: ['Export'],
  summary: 'Service inventory as JSON line-delimited',
  operationId: 'exportServicesJSONL',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered service results',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgServicesServicenowCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/services.servicenow.csv',
  tags: ['ServiceNow'],
  summary: 'Export a service inventory as CSV for ServiceNow integration',
  operationId: 'snowExportServicesCSV',
  responses: {
    200: {
      description: 'services export',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgSitesCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/sites.csv',
  tags: ['Export'],
  summary: 'Site list as CSV',
  operationId: 'exportSitesCSV',
  responses: {
    200: {
      description: 'all sites',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgSitesJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/sites.json',
  tags: ['Export'],
  summary: 'Export all sites',
  operationId: 'exportSitesJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'all sites',
      content: { 'application/json': { schema: z.array(SiteSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgSitesJsonlRoute = createRoute({
  method: 'get',
  path: '/export/org/sites.jsonl',
  tags: ['Export'],
  summary: 'Site list as JSON line-delimited',
  operationId: 'exportSitesJSONL',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'all sites',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgWirelessCsvRoute = createRoute({
  method: 'get',
  path: '/export/org/wireless.csv',
  tags: ['Export'],
  summary: 'Wireless inventory as CSV',
  operationId: 'exportWirelessCSV',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered wireless results',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgWirelessJsonRoute = createRoute({
  method: 'get',
  path: '/export/org/wireless.json',
  tags: ['Export'],
  summary: 'Wireless inventory as JSON',
  operationId: 'exportWirelessJSON',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered wireless results',
      content: { 'application/json': { schema: z.array(WirelessSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getExportOrgWirelessJsonlRoute = createRoute({
  method: 'get',
  path: '/export/org/wireless.jsonl',
  tags: ['Export'],
  summary: 'Wireless inventory as JSON line-delimited',
  operationId: 'exportWirelessJSONL',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional list of fields to export, comma-separated',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filtered wireless results',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgRoute = createRoute({
  method: 'get',
  path: '/org',
  tags: ['Organization'],
  summary: 'Get organization details',
  operationId: 'getOrganization',
  responses: {
    200: {
      description: 'organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgRoute = createRoute({
  method: 'patch',
  path: '/org',
  tags: ['Organization'],
  summary: 'Update organization details',
  operationId: 'updateOrganization',
  request: {
    body: {
      description: 'organization options',
      content: { 'application/json': { schema: OrgOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'organization details',
      content: { 'application/json': { schema: OrganizationSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAgentsRoute = createRoute({
  method: 'get',
  path: '/org/agents',
  tags: ['Organization'],
  summary: 'Get all agents',
  operationId: 'getAgents',
  responses: {
    200: {
      description: 'array of agents',
      content: { 'application/json': { schema: z.array(AgentSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAgentsAgentIdRoute = createRoute({
  method: 'get',
  path: '/org/agents/{agent_id}',
  tags: ['Organization'],
  summary: 'Get details for a single agent',
  operationId: 'getAgent',
  request: {
    params: z.object({
      agent_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the agent',
            in: 'path',
            name: 'agent_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'agent details', content: { 'application/json': { schema: AgentSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgAgentsAgentIdRoute = createRoute({
  method: 'delete',
  path: '/org/agents/{agent_id}',
  tags: ['Organization'],
  summary: 'Remove and uninstall an agent',
  operationId: 'removeAgent',
  request: {
    params: z.object({
      agent_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the agent to remove',
            in: 'path',
            name: 'agent_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgAgentsAgentIdRoute = createRoute({
  method: 'patch',
  path: '/org/agents/{agent_id}',
  tags: ['Organization'],
  summary: 'Update the site associated with agent',
  operationId: 'updateAgentSite',
  request: {
    params: z.object({
      agent_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the agent to update',
            in: 'path',
            name: 'agent_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'site_id to associate with the agent',
      content: { 'application/json': { schema: AgentSiteIDSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'agent details', content: { 'application/json': { schema: AgentSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postOrgAgentsAgentIdUpdateRoute = createRoute({
  method: 'post',
  path: '/org/agents/{agent_id}/update',
  tags: ['Organization'],
  summary: 'Force an agent to update and restart',
  operationId: 'upgradeAgent',
  request: {
    params: z.object({
      agent_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the agent to update',
            in: 'path',
            name: 'agent_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsRoute = createRoute({
  method: 'get',
  path: '/org/assets',
  tags: ['Organization'],
  summary: 'Get all assets',
  operationId: 'getAssets',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of assets',
      content: { 'application/json': { schema: z.array(AssetSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postOrgAssetsBulkClearTagsRoute = createRoute({
  method: 'post',
  path: '/org/assets/bulk/clearTags',
  tags: ['Organization'],
  summary: 'Clear all tags across multiple assets based on a search query',
  operationId: 'clearBulkAssetTags',
  request: {
    body: {
      description: 'search query to filter',
      content: { 'application/json': { schema: SearchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'status message',
      content: { 'application/json': { schema: StatusMessageResponse } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgAssetsBulkTagsRoute = createRoute({
  method: 'patch',
  path: '/org/assets/bulk/tags',
  tags: ['Organization'],
  summary: 'Update tags across multiple assets based on a search query',
  operationId: 'updateBulkAssetTags',
  request: {
    body: {
      description: 'search query to filter and tags to apply',
      content: { 'application/json': { schema: AssetTagsWithSearchSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'status message',
      content: { 'application/json': { schema: StatusMessageResponse } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsTopHwCsvRoute = createRoute({
  method: 'get',
  path: '/org/assets/top.hw.csv',
  tags: ['Export'],
  summary: 'Top asset hardware products as CSV',
  operationId: 'exportAssetTopHWCSV',
  responses: {
    200: {
      description: 'top asset hardware platforms and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsTopOsCsvRoute = createRoute({
  method: 'get',
  path: '/org/assets/top.os.csv',
  tags: ['Export'],
  summary: 'Top asset operating systems as CSV',
  operationId: 'exportAssetTopOSCSV',
  responses: {
    200: {
      description: 'top operating systems and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsTopTagsCsvRoute = createRoute({
  method: 'get',
  path: '/org/assets/top.tags.csv',
  tags: ['Export'],
  summary: 'Top asset tags as CSV',
  operationId: 'exportAssetTopTagsCSV',
  responses: {
    200: {
      description: 'top asset tags and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsTopTypesCsvRoute = createRoute({
  method: 'get',
  path: '/org/assets/top.types.csv',
  tags: ['Export'],
  summary: 'Top asset types as CSV',
  operationId: 'exportAssetTopTypesCSV',
  responses: {
    200: {
      description: 'top asset types and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/org/assets/{asset_id}',
  tags: ['Organization'],
  summary: 'Get asset details',
  operationId: 'getAsset',
  request: {
    params: z.object({
      asset_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the asset to retrieve',
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'asset details', content: { 'application/json': { schema: AssetSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/org/assets/{asset_id}',
  tags: ['Organization'],
  summary: 'Remove an asset',
  operationId: 'removeAsset',
  request: {
    params: z.object({
      asset_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the asset to remove',
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgAssetsAssetIdCommentsRoute = createRoute({
  method: 'patch',
  path: '/org/assets/{asset_id}/comments',
  tags: ['Organization'],
  summary: 'Update asset comments',
  operationId: 'updateAssetComments',
  request: {
    params: z.object({
      asset_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the asset to update',
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'comments to apply to the asset',
      content: { 'application/json': { schema: AssetCommentsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'asset details', content: { 'application/json': { schema: AssetSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgAssetsAssetIdTagsRoute = createRoute({
  method: 'patch',
  path: '/org/assets/{asset_id}/tags',
  tags: ['Organization'],
  summary: 'Update asset tags',
  operationId: 'updateAssetTags',
  request: {
    params: z.object({
      asset_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the asset to update',
            in: 'path',
            name: 'asset_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'tags to apply to the asset',
      content: { 'application/json': { schema: AssetTagsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'asset details', content: { 'application/json': { schema: AssetSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgKeyRoute = createRoute({
  method: 'get',
  path: '/org/key',
  tags: ['Organization'],
  summary: 'Get API key details',
  operationId: 'getKey',
  responses: {
    200: {
      description: 'api key details',
      content: { 'application/json': { schema: APIKeySchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgKeyRoute = createRoute({
  method: 'delete',
  path: '/org/key',
  tags: ['Organization'],
  summary: 'Remove the current API key',
  operationId: 'removeKey',
  responses: { 204: { description: 'empty response' }, 401: UnauthorizedErrorResponse },
  security: [{ bearerAuth: [] }],
})

export const patchOrgKeyRotateRoute = createRoute({
  method: 'patch',
  path: '/org/key/rotate',
  tags: ['Organization'],
  summary: 'Rotate the API key secret and return the updated key',
  operationId: 'rotateKey',
  responses: {
    200: {
      description: 'api key details',
      content: { 'application/json': { schema: APIKeySchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesRoute = createRoute({
  method: 'get',
  path: '/org/services',
  tags: ['Organization'],
  summary: 'Get all services',
  operationId: 'getServices',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of services',
      content: { 'application/json': { schema: z.array(ServiceSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesSubnetStatsCsvRoute = createRoute({
  method: 'get',
  path: '/org/services/subnet.stats.csv',
  tags: ['Export'],
  summary: 'Subnet utilization statistics as as CSV',
  operationId: 'exportSubnetUtilizationStatsCSV',
  request: {
    query: z.object({
      mask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional subnet mask size (ex:24)',
            in: 'query',
            name: 'mask',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'subnet utilization stats as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesTopProductsCsvRoute = createRoute({
  method: 'get',
  path: '/org/services/top.products.csv',
  tags: ['Export'],
  summary: 'Top service products as CSV',
  operationId: 'exportServicesTopProductsCSV',
  responses: {
    200: {
      description: 'top service products and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesTopProtocolsCsvRoute = createRoute({
  method: 'get',
  path: '/org/services/top.protocols.csv',
  tags: ['Export'],
  summary: 'Top service protocols as CSV',
  operationId: 'exportServicesTopProtocolsCSV',
  responses: {
    200: {
      description: 'top service protocols and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesTopTcpCsvRoute = createRoute({
  method: 'get',
  path: '/org/services/top.tcp.csv',
  tags: ['Export'],
  summary: 'Top TCP services as CSV',
  operationId: 'exportServicesTopTCPCSV',
  responses: {
    200: {
      description: 'top TCP services and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesTopUdpCsvRoute = createRoute({
  method: 'get',
  path: '/org/services/top.udp.csv',
  tags: ['Export'],
  summary: 'Top UDP services as CSV',
  operationId: 'exportServicesTopUDPCSV',
  responses: {
    200: {
      description: 'top UDP services and counts as csv',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/org/services/{service_id}',
  tags: ['Organization'],
  summary: 'Get service details',
  operationId: 'getService',
  request: {
    params: z.object({
      service_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the service to retrieve',
            in: 'path',
            name: 'service_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'service details',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/org/services/{service_id}',
  tags: ['Organization'],
  summary: 'Remove a service',
  operationId: 'removeService',
  request: {
    params: z.object({
      service_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the service to remove',
            in: 'path',
            name: 'service_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgSitesRoute = createRoute({
  method: 'get',
  path: '/org/sites',
  tags: ['Organization'],
  summary: 'Get all sites',
  operationId: 'getSites',
  responses: {
    200: {
      description: 'array of sites',
      content: { 'application/json': { schema: z.array(SiteSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putOrgSitesRoute = createRoute({
  method: 'put',
  path: '/org/sites',
  tags: ['Organization'],
  summary: 'Create a new site',
  operationId: 'createSite',
  request: {
    body: {
      description: 'site definition',
      content: { 'application/json': { schema: SiteOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'site details', content: { 'application/json': { schema: SiteSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgSitesSiteIdRoute = createRoute({
  method: 'get',
  path: '/org/sites/{site_id}',
  tags: ['Organization'],
  summary: 'Get site details',
  operationId: 'getSite',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'site details', content: { 'application/json': { schema: SiteSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgSitesSiteIdRoute = createRoute({
  method: 'delete',
  path: '/org/sites/{site_id}',
  tags: ['Organization'],
  summary: 'Remove a site and associated assets',
  operationId: 'removeSite',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site to remove',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgSitesSiteIdRoute = createRoute({
  method: 'patch',
  path: '/org/sites/{site_id}',
  tags: ['Organization'],
  summary: 'Update a site definition',
  operationId: 'updateSite',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site to update',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'site object',
      content: { 'application/json': { schema: SiteOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'site details', content: { 'application/json': { schema: SiteSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putOrgSitesSiteIdImportRoute = createRoute({
  method: 'put',
  path: '/org/sites/{site_id}/import',
  tags: ['Organization'],
  summary: 'Import a scan data file into a site',
  operationId: 'importScanData',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site to import scan data into',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: { description: 'import task', content: { 'application/json': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
    403: LicenseExpiredErrorResponse,
    404: NotFoundErrorResponse,
    500: ProcessingErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putOrgSitesSiteIdImportNessusRoute = createRoute({
  method: 'put',
  path: '/org/sites/{site_id}/import/nessus',
  tags: ['Organization'],
  summary: 'Import a Nessus scan data file into a site',
  operationId: 'importNessusScanData',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site to import Nessus scan data into',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: { description: 'import task', content: { 'application/json': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
    403: LicenseExpiredErrorResponse,
    404: NotFoundErrorResponse,
    500: ProcessingErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const putOrgSitesSiteIdScanRoute = createRoute({
  method: 'put',
  path: '/org/sites/{site_id}/scan',
  tags: ['Organization'],
  summary: 'Create a scan task for a given site',
  operationId: 'createScan',
  request: {
    params: z.object({
      site_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID or name of the site to scan',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'text/json': { schema: ScanOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'a created scan task',
      content: { 'application/json': { schema: TaskSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: LicenseExpiredErrorResponse,
    404: NotFoundErrorResponse,
    500: ProcessingErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgTasksRoute = createRoute({
  method: 'get',
  path: '/org/tasks',
  tags: ['Organization'],
  summary: 'Get all tasks (last 1000)',
  operationId: 'getTasks',
  request: {
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional status string for filtering results',
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of tasks',
      content: { 'application/json': { schema: z.array(TaskSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/org/tasks/{task_id}',
  tags: ['Organization'],
  summary: 'Get task details',
  operationId: 'getTask',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task to retrieve',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'task details', content: { 'application/json': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const patchOrgTasksTaskIdRoute = createRoute({
  method: 'patch',
  path: '/org/tasks/{task_id}',
  tags: ['Organization'],
  summary: 'Update task parameters',
  operationId: 'updateTask',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task to update',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'task object',
      content: { 'application/json': { schema: TaskSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'task details', content: { 'application/json': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgTasksTaskIdChangesRoute = createRoute({
  method: 'get',
  path: '/org/tasks/{task_id}/changes',
  tags: ['Organization'],
  summary: 'Returns a temporary task change report data url',
  operationId: 'getTaskChangeReport',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: URLSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgTasksTaskIdDataRoute = createRoute({
  method: 'get',
  path: '/org/tasks/{task_id}/data',
  tags: ['Organization'],
  summary: 'Returns a temporary task scan data url',
  operationId: 'getTaskScanData',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: URLSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postOrgTasksTaskIdHideRoute = createRoute({
  method: 'post',
  path: '/org/tasks/{task_id}/hide',
  tags: ['Organization'],
  summary: 'Signal that a completed task should be hidden',
  operationId: 'hideTask',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task to hide',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgTasksTaskIdLogRoute = createRoute({
  method: 'get',
  path: '/org/tasks/{task_id}/log',
  tags: ['Organization'],
  summary: 'Returns a temporary task log data url',
  operationId: 'getTaskLog',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: URLSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const postOrgTasksTaskIdStopRoute = createRoute({
  method: 'post',
  path: '/org/tasks/{task_id}/stop',
  tags: ['Organization'],
  summary:
    'Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks',
  operationId: 'stopTask',
  request: {
    params: z.object({
      task_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the task to stop',
            in: 'path',
            name: 'task_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Automatically created', content: { '*/*': { schema: TaskSchema } } },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgWirelessRoute = createRoute({
  method: 'get',
  path: '/org/wireless',
  tags: ['Organization'],
  summary: 'Get all wireless LANs',
  operationId: 'getWirelessLANs',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'an optional search string for filtering results',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'array of wireless LANs',
      content: { 'application/json': { schema: z.array(WirelessSchema) } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getOrgWirelessWirelessIdRoute = createRoute({
  method: 'get',
  path: '/org/wireless/{wireless_id}',
  tags: ['Organization'],
  summary: 'Get wireless LAN details',
  operationId: 'getWirelessLAN',
  request: {
    params: z.object({
      wireless_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the wireless LAN to retrieve',
            in: 'path',
            name: 'wireless_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'wireless details',
      content: { 'application/json': { schema: WirelessSchema } },
    },
    401: UnauthorizedErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const deleteOrgWirelessWirelessIdRoute = createRoute({
  method: 'delete',
  path: '/org/wireless/{wireless_id}',
  tags: ['Organization'],
  summary: 'Remove a wireless LAN',
  operationId: 'removeWirelessLAN',
  request: {
    params: z.object({
      wireless_id: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the wireless LAN to remove',
            in: 'path',
            name: 'wireless_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'empty response' },
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
  security: [{ bearerAuth: [] }],
})

export const getReleasesAgentVersionRoute = createRoute({
  method: 'get',
  path: '/releases/agent/version',
  tags: ['Public'],
  summary: 'Returns latest agent version',
  operationId: 'getLatestAgentVersion',
  responses: {
    200: {
      description: 'component version',
      content: { 'application/json': { schema: ComponentVersionSchema } },
    },
  },
})

export const getReleasesPlatformVersionRoute = createRoute({
  method: 'get',
  path: '/releases/platform/version',
  tags: ['Public'],
  summary: 'Returns latest platform version',
  operationId: 'getLatestPlatformVersion',
  responses: {
    200: {
      description: 'component version',
      content: { 'application/json': { schema: ComponentVersionSchema } },
    },
  },
})

export const getReleasesScannerVersionRoute = createRoute({
  method: 'get',
  path: '/releases/scanner/version',
  tags: ['Public'],
  summary: 'Returns latest scanner version',
  operationId: 'getLatestScannerVersion',
  responses: {
    200: {
      description: 'component version',
      content: { 'application/json': { schema: ComponentVersionSchema } },
    },
  },
})
