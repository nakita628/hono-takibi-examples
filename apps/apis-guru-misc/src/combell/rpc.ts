import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function getDnsDomainNameRecords(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns[':domainName'].records.$get(args, options))
}

export async function postDnsDomainNameRecords(
  args: InferRequestType<(typeof client.dns)[':domainName']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns[':domainName'].records.$post(args, options))
}

export async function getDnsDomainNameRecordsRecordId(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns[':domainName'].records[':recordId'].$get(args, options))
}

export async function putDnsDomainNameRecordsRecordId(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns[':domainName'].records[':recordId'].$put(args, options))
}

export async function deleteDnsDomainNameRecordsRecordId(
  args: InferRequestType<(typeof client.dns)[':domainName']['records'][':recordId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns[':domainName'].records[':recordId'].$delete(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function postDomainsRegistrations(
  args: InferRequestType<typeof client.domains.registrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.registrations.$post(args, options))
}

export async function postDomainsTransfers(
  args: InferRequestType<typeof client.domains.transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.transfers.$post(args, options))
}

export async function getDomainsDomainName(
  args: InferRequestType<(typeof client.domains)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainName'].$get(args, options))
}

export async function putDomainsDomainNameNameservers(
  args: InferRequestType<(typeof client.domains)[':domainName']['nameservers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainName'].nameservers.$put(args, options))
}

export async function putDomainsDomainNameRenew(
  args: InferRequestType<(typeof client.domains)[':domainName']['renew']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainName'].renew.$put(args, options))
}

export async function getLinuxhostings(
  args: InferRequestType<typeof client.linuxhostings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings.$get(args, options))
}

export async function getLinuxhostingsDomainName(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings[':domainName'].$get(args, options))
}

export async function putLinuxhostingsDomainNameFtpConfiguration(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['ftp']['configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].ftp.configuration.$put(args, options),
  )
}

export async function putLinuxhostingsDomainNamePhpsettingsApcu(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['apcu']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].phpsettings.apcu.$put(args, options),
  )
}

export async function getLinuxhostingsDomainNamePhpsettingsAvailableversions(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['availableversions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].phpsettings.availableversions.$get(args, options),
  )
}

export async function putLinuxhostingsDomainNamePhpsettingsMemorylimit(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['memorylimit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].phpsettings.memorylimit.$put(args, options),
  )
}

export async function putLinuxhostingsDomainNamePhpsettingsVersion(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['phpsettings']['version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].phpsettings.version.$put(args, options),
  )
}

export async function getLinuxhostingsDomainNameScheduledtasks(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings[':domainName'].scheduledtasks.$get(args, options))
}

export async function postLinuxhostingsDomainNameScheduledtasks(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['scheduledtasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].scheduledtasks.$post(args, options),
  )
}

export async function getLinuxhostingsDomainNameScheduledtasksScheduledTaskId(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$get(args, options),
  )
}

export async function putLinuxhostingsDomainNameScheduledtasksScheduledTaskId(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$put(args, options),
  )
}

export async function deleteLinuxhostingsDomainNameScheduledtasksScheduledTaskId(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['scheduledtasks'][':scheduledTaskId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].scheduledtasks[':scheduledTaskId'].$delete(args, options),
  )
}

export async function putLinuxhostingsDomainNameSettingsGzipcompression(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['settings']['gzipcompression']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].settings.gzipcompression.$put(args, options),
  )
}

export async function postLinuxhostingsDomainNameSitesSiteNameHostheaders(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['hostheaders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].sites[':siteName'].hostheaders.$post(args, options),
  )
}

export async function putLinuxhostingsDomainNameSitesSiteNameHttp2Configuration(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['sites'][':siteName']['http2']['configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].sites[':siteName'].http2.configuration.$put(args, options),
  )
}

export async function putLinuxhostingsDomainNameSshConfiguration(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['ssh']['configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].ssh.configuration.$put(args, options),
  )
}

export async function getLinuxhostingsDomainNameSshKeys(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings[':domainName'].ssh.keys.$get(args, options))
}

export async function postLinuxhostingsDomainNameSshKeys(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['ssh']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings[':domainName'].ssh.keys.$post(args, options))
}

export async function deleteLinuxhostingsDomainNameSshKeysFingerprint(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['ssh']['keys'][':fingerprint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].ssh.keys[':fingerprint'].$delete(args, options),
  )
}

export async function putLinuxhostingsDomainNameSslsettingsHostnameAutoredirect(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['autoredirect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].sslsettings[':hostname'].autoredirect.$put(args, options),
  )
}

export async function putLinuxhostingsDomainNameSslsettingsHostnameLetsencrypt(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['sslsettings'][':hostname']['letsencrypt']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].sslsettings[':hostname'].letsencrypt.$put(args, options),
  )
}

export async function postLinuxhostingsDomainNameSubsites(
  args: InferRequestType<(typeof client.linuxhostings)[':domainName']['subsites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linuxhostings[':domainName'].subsites.$post(args, options))
}

export async function deleteLinuxhostingsDomainNameSubsitesSiteName(
  args: InferRequestType<
    (typeof client.linuxhostings)[':domainName']['subsites'][':siteName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linuxhostings[':domainName'].subsites[':siteName'].$delete(args, options),
  )
}

export async function getMailboxes(
  args: InferRequestType<typeof client.mailboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes.$get(args, options))
}

export async function postMailboxes(
  args: InferRequestType<typeof client.mailboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes.$post(args, options))
}

export async function getMailboxesMailboxName(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes[':mailboxName'].$get(args, options))
}

export async function deleteMailboxesMailboxName(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes[':mailboxName'].$delete(args, options))
}

export async function putMailboxesMailboxNameAutoforward(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoforward']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes[':mailboxName'].autoforward.$put(args, options))
}

export async function putMailboxesMailboxNameAutoreply(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['autoreply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes[':mailboxName'].autoreply.$put(args, options))
}

export async function putMailboxesMailboxNamePassword(
  args: InferRequestType<(typeof client.mailboxes)[':mailboxName']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailboxes[':mailboxName'].password.$put(args, options))
}

export async function getMailzonesDomainName(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailzones[':domainName'].$get(args, options))
}

export async function postMailzonesDomainNameAliases(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailzones[':domainName'].aliases.$post(args, options))
}

export async function putMailzonesDomainNameAliasesEmailAddress(
  args: InferRequestType<
    (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mailzones[':domainName'].aliases[':emailAddress'].$put(args, options),
  )
}

export async function deleteMailzonesDomainNameAliasesEmailAddress(
  args: InferRequestType<
    (typeof client.mailzones)[':domainName']['aliases'][':emailAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mailzones[':domainName'].aliases[':emailAddress'].$delete(args, options),
  )
}

export async function putMailzonesDomainNameAntispam(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['antispam']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailzones[':domainName'].antispam.$put(args, options))
}

export async function postMailzonesDomainNameCatchall(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['catchall']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailzones[':domainName'].catchall.$post(args, options))
}

export async function deleteMailzonesDomainNameCatchallEmailAddress(
  args: InferRequestType<
    (typeof client.mailzones)[':domainName']['catchall'][':emailAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mailzones[':domainName'].catchall[':emailAddress'].$delete(args, options),
  )
}

export async function postMailzonesDomainNameSmtpdomains(
  args: InferRequestType<(typeof client.mailzones)[':domainName']['smtpdomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mailzones[':domainName'].smtpdomains.$post(args, options))
}

export async function putMailzonesDomainNameSmtpdomainsHostname(
  args: InferRequestType<
    (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mailzones[':domainName'].smtpdomains[':hostname'].$put(args, options),
  )
}

export async function deleteMailzonesDomainNameSmtpdomainsHostname(
  args: InferRequestType<
    (typeof client.mailzones)[':domainName']['smtpdomains'][':hostname']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mailzones[':domainName'].smtpdomains[':hostname'].$delete(args, options),
  )
}

export async function getMysqldatabases(
  args: InferRequestType<typeof client.mysqldatabases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases.$get(args, options))
}

export async function postMysqldatabases(
  args: InferRequestType<typeof client.mysqldatabases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases.$post(args, options))
}

export async function getMysqldatabasesDatabaseName(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases[':databaseName'].$get(args, options))
}

export async function deleteMysqldatabasesDatabaseName(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases[':databaseName'].$delete(args, options))
}

export async function getMysqldatabasesDatabaseNameUsers(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases[':databaseName'].users.$get(args, options))
}

export async function postMysqldatabasesDatabaseNameUsers(
  args: InferRequestType<(typeof client.mysqldatabases)[':databaseName']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mysqldatabases[':databaseName'].users.$post(args, options))
}

export async function deleteMysqldatabasesDatabaseNameUsersUserName(
  args: InferRequestType<
    (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mysqldatabases[':databaseName'].users[':userName'].$delete(args, options),
  )
}

export async function putMysqldatabasesDatabaseNameUsersUserNamePassword(
  args: InferRequestType<
    (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mysqldatabases[':databaseName'].users[':userName'].password.$put(args, options),
  )
}

export async function putMysqldatabasesDatabaseNameUsersUserNameStatus(
  args: InferRequestType<
    (typeof client.mysqldatabases)[':databaseName']['users'][':userName']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mysqldatabases[':databaseName'].users[':userName'].status.$put(args, options),
  )
}

export async function getProvisioningjobsJobId(
  args: InferRequestType<(typeof client.provisioningjobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.provisioningjobs[':jobId'].$get(args, options))
}

export async function getServicepacks(options?: ClientRequestOptions) {
  return await parseResponse(client.servicepacks.$get(undefined, options))
}

export async function getSsh(
  args: InferRequestType<typeof client.ssh.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssh.$get(args, options))
}

export async function getSslcertificaterequests(
  args: InferRequestType<typeof client.sslcertificaterequests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificaterequests.$get(args, options))
}

export async function postSslcertificaterequests(
  args: InferRequestType<typeof client.sslcertificaterequests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificaterequests.$post(args, options))
}

export async function getSslcertificaterequestsId(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificaterequests[':id'].$get(args, options))
}

export async function putSslcertificaterequestsId(
  args: InferRequestType<(typeof client.sslcertificaterequests)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificaterequests[':id'].$put(args, options))
}

export async function getSslcertificates(
  args: InferRequestType<typeof client.sslcertificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificates.$get(args, options))
}

export async function getSslcertificatesSha1Fingerprint(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcertificates[':sha1Fingerprint'].$get(args, options))
}

export async function getSslcertificatesSha1FingerprintDownload(
  args: InferRequestType<(typeof client.sslcertificates)[':sha1Fingerprint']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sslcertificates[':sha1Fingerprint'].download.$get(args, options),
  )
}

export async function getWindowshostings(
  args: InferRequestType<typeof client.windowshostings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.windowshostings.$get(args, options))
}

export async function getWindowshostingsDomainName(
  args: InferRequestType<(typeof client.windowshostings)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.windowshostings[':domainName'].$get(args, options))
}
