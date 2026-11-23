import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCqactionsHtml(
  args: InferRequestType<(typeof client)['.cqactions.html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['.cqactions.html'].$post(args, options))
}

export async function postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfig(
  args: InferRequestType<
    (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config'].$post(
      args,
      options,
    ),
  )
}

export async function postAppsSystemConfigComShinesolutionsAemPasswordresetActivator(
  args: InferRequestType<
    (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['com.shinesolutions.aem.passwordreset.Activator'].$post(
      args,
      options,
    ),
  )
}

export async function postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheck(
  args: InferRequestType<
    (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config[
      'com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck'
    ].$post(args, options),
  )
}

export async function postAppsSystemConfigOrgApacheFelixHttp(
  args: InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['org.apache.felix.http'].$post(args, options),
  )
}

export async function postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfig(
  args: InferRequestType<
    (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['org.apache.http.proxyconfigurator.config'].$post(args, options),
  )
}

export async function postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServlet(
  args: InferRequestType<
    (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet'].$post(
      args,
      options,
    ),
  )
}

export async function postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilter(
  args: InferRequestType<
    (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['org.apache.sling.security.impl.ReferrerFilter'].$post(args, options),
  )
}

export async function postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServlet(
  args: InferRequestType<
    (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.system.config['org.apache.sling.servlets.get.DefaultGetServlet'].$post(
      args,
      options,
    ),
  )
}

export async function postAppsSystemConfigConfigNodeName(
  args: InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.system.config[':configNodeName'].$post(args, options))
}

export async function getBinQuerybuilderJson(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin['querybuilder.json'].$get(args, options))
}

export async function postBinQuerybuilderJson(
  args: InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bin['querybuilder.json'].$post(args, options))
}

export async function postCrxExplorerUiSetpasswordJsp(
  args: InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crx.explorer.ui['setpassword.jsp'].$post(args, options))
}

export async function getCrxPackmgrInstallstatusJsp(options?: ClientRequestOptions) {
  return await parseResponse(client.crx.packmgr['installstatus.jsp'].$get(undefined, options))
}

export async function postCrxPackmgrServiceJsp(
  args: InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crx.packmgr['service.jsp'].$post(args, options))
}

export async function postCrxPackmgrServiceJsonPath(
  args: InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crx.packmgr.service['.json'][':path'].$post(args, options))
}

export async function getCrxPackmgrServiceScriptHtml(options?: ClientRequestOptions) {
  return await parseResponse(client.crx.packmgr.service['script.html'].$get(undefined, options))
}

export async function postCrxPackmgrUpdateJsp(
  args: InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crx.packmgr['update.jsp'].$post(args, options))
}

export async function getCrxServerCrxDefaultJcrRoot1Json(options?: ClientRequestOptions) {
  return await parseResponse(
    client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, options),
  )
}

export async function getEtcPackagesGroupNameVersionZip(
  args: InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.etc.packages[':group'][':name-{version}.zip'].$get(args, options),
  )
}

export async function getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2Json(
  args: InferRequestType<
    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.etc.packages[':group'][':name-{version}.zip']['jcr:content']['vlt:definition'][
      'filter.tidy.2.json'
    ].$get(args, options),
  )
}

export async function getEtcReplicationAgentsRunmode1Json(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etc.replication['agents.{runmode}.-1.json'].$get(args, options))
}

export async function getEtcReplicationAgentsRunmodeName(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.etc.replication['agents.{runmode}'][':name'].$get(args, options),
  )
}

export async function postEtcReplicationAgentsRunmodeName(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.etc.replication['agents.{runmode}'][':name'].$post(args, options),
  )
}

export async function deleteEtcReplicationAgentsRunmodeName(
  args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.etc.replication['agents.{runmode}'][':name'].$delete(args, options),
  )
}

export async function postEtcTruststore(
  args: InferRequestType<typeof client.etc.truststore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etc.truststore.$post(args, options))
}

export async function getEtcTruststoreTruststoreP12(options?: ClientRequestOptions) {
  return await parseResponse(client.etc.truststore['truststore.p12'].$get(undefined, options))
}

export async function getLibsGraniteCoreContentLoginHtml(options?: ClientRequestOptions) {
  return await parseResponse(
    client.libs.granite.core.content['login.html'].$get(undefined, options),
  )
}

export async function postLibsGraniteSecurityPostAuthorizables(
  args: InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libs.granite.security.post.authorizables.$post(args, options))
}

export async function postLibsGraniteSecurityPostSslSetupHtml(
  args: InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.libs.granite.security.post['sslSetup.html'].$post(args, options),
  )
}

export async function postLibsGraniteSecurityPostTruststore(
  args: InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libs.granite.security.post.truststore.$post(args, options))
}

export async function getLibsGraniteSecurityTruststoreJson(options?: ClientRequestOptions) {
  return await parseResponse(
    client.libs.granite.security['truststore.json'].$get(undefined, options),
  )
}

export async function postLibsReplicationTreeactivationHtml(
  args: InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libs.replication['treeactivation.html'].$post(args, options))
}

export async function postSystemConsoleBundlesName(
  args: InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.console.bundles[':name'].$post(args, options))
}

export async function getSystemConsoleBundlesNameJson(
  args: InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.console.bundles[':name.json'].$get(args, options))
}

export async function getSystemConsoleConfigMgr(options?: ClientRequestOptions) {
  return await parseResponse(client.system.console.configMgr.$get(undefined, options))
}

export async function postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandler(
  args: InferRequestType<
    (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.system.console.configMgr['com.adobe.granite.auth.saml.SamlAuthenticationHandler'].$post(
      args,
      options,
    ),
  )
}

export async function postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpAction(
  args: InferRequestType<
    (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.system.console.jmx['com.adobe.granite:type=Repository'].op[':action'].$post(
      args,
      options,
    ),
  )
}

export async function getSystemConsoleStatusProductinfoJson(options?: ClientRequestOptions) {
  return await parseResponse(
    client.system.console['status-productinfo.json'].$get(undefined, options),
  )
}

export async function getSystemHealth(
  args: InferRequestType<typeof client.system.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.health.$get(args, options))
}

export async function postIntermediatePathAuthorizableIdKsHtml(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':intermediatePath'][':authorizableId.ks.html'].$post(args, options),
  )
}

export async function getIntermediatePathAuthorizableIdKsJson(
  args: InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':intermediatePath'][':authorizableId.ks.json'].$get(args, options),
  )
}

export async function getIntermediatePathAuthorizableIdKeystoreStoreP12(
  args: InferRequestType<
    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(args, options),
  )
}

export async function postPathIndex(
  args: InferRequestType<(typeof client)[':path']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].index.$post(args, options))
}

export async function getPathName(
  args: InferRequestType<(typeof client)[':path'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'][':name'].$get(args, options))
}

export async function postPathName(
  args: InferRequestType<(typeof client)[':path'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'][':name'].$post(args, options))
}

export async function deletePathName(
  args: InferRequestType<(typeof client)[':path'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'][':name'].$delete(args, options))
}

export async function postPathNameRwHtml(
  args: InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'][':name.rw.html'].$post(args, options))
}
