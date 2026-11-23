import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAquiferCodesDemandIndexRoute,
  getAquiferCodesMaterialsIndexRoute,
  getAquiferCodesProductivityIndexRoute,
  getAquiferCodesQualityConcernsIndexRoute,
  getAquiferCodesSubtypesIndexRoute,
  getAquiferCodesVulnerabilityIndexRoute,
  getAquiferCodesWaterUseIndexRoute,
  getAquifersAquiferIdFilesRoute,
  getAquifersAquiferIdIndexRoute,
  getAquifersIndexRoute,
  getAquifersNamesIndexRoute,
  getCitiesDrillersIndexRoute,
  getCitiesInstallersIndexRoute,
  getConfigRoute,
  getDrillersIndexRoute,
  getDrillersNamesIndexRoute,
  getDrillersPersonGuidFilesIndexRoute,
  getKeycloakRoute,
  getSubmissionsOptionsIndexRoute,
  getSurveysIndexRoute,
  getWellsIndexRoute,
  getWellsTagFilesRoute,
  getWellsTagsIndexRoute,
  getWellsWellTagNumberRoute,
} from './routes'
import {
  getAquiferCodesDemandIndexRouteHandler,
  getAquiferCodesMaterialsIndexRouteHandler,
  getAquiferCodesProductivityIndexRouteHandler,
  getAquiferCodesQualityConcernsIndexRouteHandler,
  getAquiferCodesSubtypesIndexRouteHandler,
  getAquiferCodesVulnerabilityIndexRouteHandler,
  getAquiferCodesWaterUseIndexRouteHandler,
  getAquifersAquiferIdFilesRouteHandler,
  getAquifersAquiferIdIndexRouteHandler,
  getAquifersIndexRouteHandler,
  getAquifersNamesIndexRouteHandler,
  getCitiesDrillersIndexRouteHandler,
  getCitiesInstallersIndexRouteHandler,
  getConfigRouteHandler,
  getDrillersIndexRouteHandler,
  getDrillersNamesIndexRouteHandler,
  getDrillersPersonGuidFilesIndexRouteHandler,
  getKeycloakRouteHandler,
  getSubmissionsOptionsIndexRouteHandler,
  getSurveysIndexRouteHandler,
  getWellsIndexRouteHandler,
  getWellsTagFilesRouteHandler,
  getWellsTagsIndexRouteHandler,
  getWellsWellTagNumberRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAquiferCodesDemandIndexRoute, getAquiferCodesDemandIndexRouteHandler)
  .openapi(getAquiferCodesMaterialsIndexRoute, getAquiferCodesMaterialsIndexRouteHandler)
  .openapi(getAquiferCodesProductivityIndexRoute, getAquiferCodesProductivityIndexRouteHandler)
  .openapi(
    getAquiferCodesQualityConcernsIndexRoute,
    getAquiferCodesQualityConcernsIndexRouteHandler,
  )
  .openapi(getAquiferCodesSubtypesIndexRoute, getAquiferCodesSubtypesIndexRouteHandler)
  .openapi(getAquiferCodesVulnerabilityIndexRoute, getAquiferCodesVulnerabilityIndexRouteHandler)
  .openapi(getAquiferCodesWaterUseIndexRoute, getAquiferCodesWaterUseIndexRouteHandler)
  .openapi(getAquifersIndexRoute, getAquifersIndexRouteHandler)
  .openapi(getAquifersNamesIndexRoute, getAquifersNamesIndexRouteHandler)
  .openapi(getAquifersAquiferIdIndexRoute, getAquifersAquiferIdIndexRouteHandler)
  .openapi(getAquifersAquiferIdFilesRoute, getAquifersAquiferIdFilesRouteHandler)
  .openapi(getCitiesDrillersIndexRoute, getCitiesDrillersIndexRouteHandler)
  .openapi(getCitiesInstallersIndexRoute, getCitiesInstallersIndexRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getDrillersIndexRoute, getDrillersIndexRouteHandler)
  .openapi(getDrillersNamesIndexRoute, getDrillersNamesIndexRouteHandler)
  .openapi(getDrillersPersonGuidFilesIndexRoute, getDrillersPersonGuidFilesIndexRouteHandler)
  .openapi(getKeycloakRoute, getKeycloakRouteHandler)
  .openapi(getSubmissionsOptionsIndexRoute, getSubmissionsOptionsIndexRouteHandler)
  .openapi(getSurveysIndexRoute, getSurveysIndexRouteHandler)
  .openapi(getWellsIndexRoute, getWellsIndexRouteHandler)
  .openapi(getWellsTagsIndexRoute, getWellsTagsIndexRouteHandler)
  .openapi(getWellsTagFilesRoute, getWellsTagFilesRouteHandler)
  .openapi(getWellsWellTagNumberRoute, getWellsWellTagNumberRouteHandler)

export default app
