import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountActiveAdSummariesHandler,
  accountPermissionGroupsHandler,
  accountPermissionsHandler,
  accountsHandler,
  accountUserProfilesHandler,
  adsHandler,
  advertiserGroupsHandler,
  advertiserLandingPagesHandler,
  advertisersHandler,
  browsersHandler,
  campaignCreativeAssociationsHandler,
  campaignsHandler,
  changeLogsHandler,
  citiesHandler,
  connectionTypesHandler,
  contentCategoriesHandler,
  conversionsHandler,
  countriesHandler,
  creativeAssetsHandler,
  creativeFieldsHandler,
  creativeFieldValuesHandler,
  creativeGroupsHandler,
  creativesHandler,
  customEventsHandler,
  dimensionValuesHandler,
  directorySitesHandler,
  dynamicTargetingKeysHandler,
  eventTagsHandler,
  filesHandler,
  floodlightActivitiesHandler,
  floodlightActivityGroupsHandler,
  floodlightConfigurationsHandler,
  inventoryItemsHandler,
  languagesHandler,
  metrosHandler,
  mobileAppsHandler,
  mobileCarriersHandler,
  operatingSystemsHandler,
  operatingSystemVersionsHandler,
  orderDocumentsHandler,
  ordersHandler,
  placementGroupsHandler,
  placementsHandler,
  placementStrategiesHandler,
  platformTypesHandler,
  postalCodesHandler,
  projectsHandler,
  regionsHandler,
  remarketingListsHandler,
  remarketingListSharesHandler,
  reportsHandler,
  sitesHandler,
  sizesHandler,
  subaccountsHandler,
  targetableRemarketingListsHandler,
  targetingTemplatesHandler,
  userProfilesHandler,
  userRolePermissionGroupsHandler,
  userRolePermissionsHandler,
  userRolesHandler,
  videoFormatsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', filesHandler)
  .route('/', userProfilesHandler)
  .route('/', accountActiveAdSummariesHandler)
  .route('/', accountPermissionGroupsHandler)
  .route('/', accountPermissionsHandler)
  .route('/', accountUserProfilesHandler)
  .route('/', accountsHandler)
  .route('/', adsHandler)
  .route('/', advertiserGroupsHandler)
  .route('/', advertiserLandingPagesHandler)
  .route('/', advertisersHandler)
  .route('/', browsersHandler)
  .route('/', campaignsHandler)
  .route('/', campaignCreativeAssociationsHandler)
  .route('/', changeLogsHandler)
  .route('/', citiesHandler)
  .route('/', connectionTypesHandler)
  .route('/', contentCategoriesHandler)
  .route('/', conversionsHandler)
  .route('/', countriesHandler)
  .route('/', creativeAssetsHandler)
  .route('/', creativeFieldsHandler)
  .route('/', creativeFieldValuesHandler)
  .route('/', creativeGroupsHandler)
  .route('/', creativesHandler)
  .route('/', customEventsHandler)
  .route('/', dimensionValuesHandler)
  .route('/', directorySitesHandler)
  .route('/', dynamicTargetingKeysHandler)
  .route('/', eventTagsHandler)
  .route('/', floodlightActivitiesHandler)
  .route('/', floodlightActivityGroupsHandler)
  .route('/', floodlightConfigurationsHandler)
  .route('/', languagesHandler)
  .route('/', metrosHandler)
  .route('/', mobileAppsHandler)
  .route('/', mobileCarriersHandler)
  .route('/', operatingSystemVersionsHandler)
  .route('/', operatingSystemsHandler)
  .route('/', placementGroupsHandler)
  .route('/', placementStrategiesHandler)
  .route('/', placementsHandler)
  .route('/', platformTypesHandler)
  .route('/', postalCodesHandler)
  .route('/', projectsHandler)
  .route('/', inventoryItemsHandler)
  .route('/', orderDocumentsHandler)
  .route('/', ordersHandler)
  .route('/', regionsHandler)
  .route('/', remarketingListSharesHandler)
  .route('/', remarketingListsHandler)
  .route('/', reportsHandler)
  .route('/', sitesHandler)
  .route('/', sizesHandler)
  .route('/', subaccountsHandler)
  .route('/', targetableRemarketingListsHandler)
  .route('/', targetingTemplatesHandler)
  .route('/', userRolePermissionGroupsHandler)
  .route('/', userRolePermissionsHandler)
  .route('/', userRolesHandler)
  .route('/', videoFormatsHandler)

export default app
