import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEtcReplicationAgentsRunmodeNameRoute,
  deletePathNameRoute,
  getBinQuerybuilderJsonRoute,
  getCrxPackmgrInstallstatusJspRoute,
  getCrxPackmgrServiceScriptHtmlRoute,
  getCrxServerCrxDefaultJcrRoot1JsonRoute,
  getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRoute,
  getEtcPackagesGroupNameVersionZipRoute,
  getEtcReplicationAgentsRunmode1JsonRoute,
  getEtcReplicationAgentsRunmodeNameRoute,
  getEtcTruststoreTruststoreP12Route,
  getIntermediatePathAuthorizableIdKeystoreStoreP12Route,
  getIntermediatePathAuthorizableIdKsJsonRoute,
  getLibsGraniteCoreContentLoginHtmlRoute,
  getLibsGraniteSecurityTruststoreJsonRoute,
  getPathNameRoute,
  getSystemConsoleBundlesNameJsonRoute,
  getSystemConsoleConfigMgrRoute,
  getSystemConsoleStatusProductinfoJsonRoute,
  getSystemHealthRoute,
  postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRoute,
  postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute,
  postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
  postAppsSystemConfigConfigNodeNameRoute,
  postAppsSystemConfigOrgApacheFelixHttpRoute,
  postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRoute,
  postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRoute,
  postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRoute,
  postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRoute,
  postBinQuerybuilderJsonRoute,
  postCqactionsHtmlRoute,
  postCrxExplorerUiSetpasswordJspRoute,
  postCrxPackmgrServiceJsonPathRoute,
  postCrxPackmgrServiceJspRoute,
  postCrxPackmgrUpdateJspRoute,
  postEtcReplicationAgentsRunmodeNameRoute,
  postEtcTruststoreRoute,
  postIntermediatePathAuthorizableIdKsHtmlRoute,
  postLibsGraniteSecurityPostAuthorizablesRoute,
  postLibsGraniteSecurityPostSslSetupHtmlRoute,
  postLibsGraniteSecurityPostTruststoreRoute,
  postLibsReplicationTreeactivationHtmlRoute,
  postPathIndexRoute,
  postPathNameRoute,
  postPathNameRwHtmlRoute,
  postSystemConsoleBundlesNameRoute,
  postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute,
  postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute,
} from './routes'
import {
  deleteEtcReplicationAgentsRunmodeNameRouteHandler,
  deletePathNameRouteHandler,
  getBinQuerybuilderJsonRouteHandler,
  getCrxPackmgrInstallstatusJspRouteHandler,
  getCrxPackmgrServiceScriptHtmlRouteHandler,
  getCrxServerCrxDefaultJcrRoot1JsonRouteHandler,
  getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRouteHandler,
  getEtcPackagesGroupNameVersionZipRouteHandler,
  getEtcReplicationAgentsRunmode1JsonRouteHandler,
  getEtcReplicationAgentsRunmodeNameRouteHandler,
  getEtcTruststoreTruststoreP12RouteHandler,
  getIntermediatePathAuthorizableIdKeystoreStoreP12RouteHandler,
  getIntermediatePathAuthorizableIdKsJsonRouteHandler,
  getLibsGraniteCoreContentLoginHtmlRouteHandler,
  getLibsGraniteSecurityTruststoreJsonRouteHandler,
  getPathNameRouteHandler,
  getSystemConsoleBundlesNameJsonRouteHandler,
  getSystemConsoleConfigMgrRouteHandler,
  getSystemConsoleStatusProductinfoJsonRouteHandler,
  getSystemHealthRouteHandler,
  postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRouteHandler,
  postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRouteHandler,
  postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRouteHandler,
  postAppsSystemConfigConfigNodeNameRouteHandler,
  postAppsSystemConfigOrgApacheFelixHttpRouteHandler,
  postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRouteHandler,
  postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRouteHandler,
  postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRouteHandler,
  postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRouteHandler,
  postBinQuerybuilderJsonRouteHandler,
  postCqactionsHtmlRouteHandler,
  postCrxExplorerUiSetpasswordJspRouteHandler,
  postCrxPackmgrServiceJsonPathRouteHandler,
  postCrxPackmgrServiceJspRouteHandler,
  postCrxPackmgrUpdateJspRouteHandler,
  postEtcReplicationAgentsRunmodeNameRouteHandler,
  postEtcTruststoreRouteHandler,
  postIntermediatePathAuthorizableIdKsHtmlRouteHandler,
  postLibsGraniteSecurityPostAuthorizablesRouteHandler,
  postLibsGraniteSecurityPostSslSetupHtmlRouteHandler,
  postLibsGraniteSecurityPostTruststoreRouteHandler,
  postLibsReplicationTreeactivationHtmlRouteHandler,
  postPathIndexRouteHandler,
  postPathNameRouteHandler,
  postPathNameRwHtmlRouteHandler,
  postSystemConsoleBundlesNameRouteHandler,
  postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRouteHandler,
  postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCqactionsHtmlRoute, postCqactionsHtmlRouteHandler)
  .openapi(
    postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRoute,
    postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRouteHandler,
  )
  .openapi(
    postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute,
    postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRouteHandler,
  )
  .openapi(
    postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
    postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRouteHandler,
  )
  .openapi(
    postAppsSystemConfigOrgApacheFelixHttpRoute,
    postAppsSystemConfigOrgApacheFelixHttpRouteHandler,
  )
  .openapi(
    postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRoute,
    postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRouteHandler,
  )
  .openapi(
    postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRoute,
    postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRouteHandler,
  )
  .openapi(
    postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRoute,
    postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRouteHandler,
  )
  .openapi(
    postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRoute,
    postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRouteHandler,
  )
  .openapi(postAppsSystemConfigConfigNodeNameRoute, postAppsSystemConfigConfigNodeNameRouteHandler)
  .openapi(getBinQuerybuilderJsonRoute, getBinQuerybuilderJsonRouteHandler)
  .openapi(postBinQuerybuilderJsonRoute, postBinQuerybuilderJsonRouteHandler)
  .openapi(postCrxExplorerUiSetpasswordJspRoute, postCrxExplorerUiSetpasswordJspRouteHandler)
  .openapi(getCrxPackmgrInstallstatusJspRoute, getCrxPackmgrInstallstatusJspRouteHandler)
  .openapi(postCrxPackmgrServiceJspRoute, postCrxPackmgrServiceJspRouteHandler)
  .openapi(postCrxPackmgrServiceJsonPathRoute, postCrxPackmgrServiceJsonPathRouteHandler)
  .openapi(getCrxPackmgrServiceScriptHtmlRoute, getCrxPackmgrServiceScriptHtmlRouteHandler)
  .openapi(postCrxPackmgrUpdateJspRoute, postCrxPackmgrUpdateJspRouteHandler)
  .openapi(getCrxServerCrxDefaultJcrRoot1JsonRoute, getCrxServerCrxDefaultJcrRoot1JsonRouteHandler)
  .openapi(getEtcPackagesGroupNameVersionZipRoute, getEtcPackagesGroupNameVersionZipRouteHandler)
  .openapi(
    getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRoute,
    getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRouteHandler,
  )
  .openapi(
    getEtcReplicationAgentsRunmode1JsonRoute,
    getEtcReplicationAgentsRunmode1JsonRouteHandler,
  )
  .openapi(
    deleteEtcReplicationAgentsRunmodeNameRoute,
    deleteEtcReplicationAgentsRunmodeNameRouteHandler,
  )
  .openapi(getEtcReplicationAgentsRunmodeNameRoute, getEtcReplicationAgentsRunmodeNameRouteHandler)
  .openapi(
    postEtcReplicationAgentsRunmodeNameRoute,
    postEtcReplicationAgentsRunmodeNameRouteHandler,
  )
  .openapi(postEtcTruststoreRoute, postEtcTruststoreRouteHandler)
  .openapi(getEtcTruststoreTruststoreP12Route, getEtcTruststoreTruststoreP12RouteHandler)
  .openapi(getLibsGraniteCoreContentLoginHtmlRoute, getLibsGraniteCoreContentLoginHtmlRouteHandler)
  .openapi(
    postLibsGraniteSecurityPostAuthorizablesRoute,
    postLibsGraniteSecurityPostAuthorizablesRouteHandler,
  )
  .openapi(
    postLibsGraniteSecurityPostSslSetupHtmlRoute,
    postLibsGraniteSecurityPostSslSetupHtmlRouteHandler,
  )
  .openapi(
    postLibsGraniteSecurityPostTruststoreRoute,
    postLibsGraniteSecurityPostTruststoreRouteHandler,
  )
  .openapi(
    getLibsGraniteSecurityTruststoreJsonRoute,
    getLibsGraniteSecurityTruststoreJsonRouteHandler,
  )
  .openapi(
    postLibsReplicationTreeactivationHtmlRoute,
    postLibsReplicationTreeactivationHtmlRouteHandler,
  )
  .openapi(postSystemConsoleBundlesNameRoute, postSystemConsoleBundlesNameRouteHandler)
  .openapi(getSystemConsoleBundlesNameJsonRoute, getSystemConsoleBundlesNameJsonRouteHandler)
  .openapi(getSystemConsoleConfigMgrRoute, getSystemConsoleConfigMgrRouteHandler)
  .openapi(
    postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute,
    postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRouteHandler,
  )
  .openapi(
    postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute,
    postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRouteHandler,
  )
  .openapi(
    getSystemConsoleStatusProductinfoJsonRoute,
    getSystemConsoleStatusProductinfoJsonRouteHandler,
  )
  .openapi(getSystemHealthRoute, getSystemHealthRouteHandler)
  .openapi(
    postIntermediatePathAuthorizableIdKsHtmlRoute,
    postIntermediatePathAuthorizableIdKsHtmlRouteHandler,
  )
  .openapi(
    getIntermediatePathAuthorizableIdKsJsonRoute,
    getIntermediatePathAuthorizableIdKsJsonRouteHandler,
  )
  .openapi(
    getIntermediatePathAuthorizableIdKeystoreStoreP12Route,
    getIntermediatePathAuthorizableIdKeystoreStoreP12RouteHandler,
  )
  .openapi(postPathIndexRoute, postPathIndexRouteHandler)
  .openapi(deletePathNameRoute, deletePathNameRouteHandler)
  .openapi(getPathNameRoute, getPathNameRouteHandler)
  .openapi(postPathNameRoute, postPathNameRouteHandler)
  .openapi(postPathNameRwHtmlRoute, postPathNameRwHtmlRouteHandler)

export default app
