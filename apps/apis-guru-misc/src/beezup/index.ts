import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analytics__GlobalHandler,
  analytics__OptimisationsHandler,
  analytics__ReportsHandler,
  analytics__RulesHandler,
  analytics__StatisticsHandler,
  analytics__TrackingHandler,
  catalogs__AutoHandler,
  catalogs__CatalogHandler,
  catalogs__GlobalHandler,
  catalogs__ImportationCatalogInfoHandler,
  catalogs__ImportationProcessHandler,
  channelCatalogs__CategoriesHandler,
  channelCatalogs__ColumnMappingsHandler,
  channelCatalogs__ExclusionFiltersHandler,
  channelCatalogs__ExportationsHandler,
  channelCatalogs__GlobalHandler,
  channelCatalogs__LegacyTracking__GlobalHandler,
  channelCatalogs__ProductsHandler,
  channelCatalogs__ProductsOptimisationHandler,
  channelCatalogs__ProductsOverridesHandler,
  channelCatalogs__SettingsHandler,
  channels__ChannelsGlobalHandler,
  customer__AccountHandler,
  customer__AlertsHandler,
  customer__ContractsHandler,
  customer__FriendsHandler,
  customer__GlobalHandler,
  customer__InvoicesHandler,
  customer__RightsHandler,
  customer__SecurityHandler,
  customer__SharesHandler,
  customer__StoresHandler,
  marketplaces__ChannelCatalogs__GlobalHandler,
  marketplaces__ChannelCatalogs__PublicationsHandler,
  marketplaces__ChannelCatalogs__SettingsHandler,
  marketplaces__Orders__AutoTransitionsHandler,
  marketplaces__Orders__BatchesHandler,
  marketplaces__Orders__ExportsHandler,
  marketplaces__Orders__GlobalHandler,
  marketplaces__Orders__ListHandler,
  marketplaces__Orders__OrderHandler,
  marketplaces__Orders__Subscriptions__SubscriptionsHandler,
  marketplaces__OrdersV3__BatchesHandler,
  marketplaces__OrdersV3__GlobalHandler,
  marketplaces__OrdersV3__ListHandler,
  marketplaces__OrdersV3__OrderHandler,
  omInvoice__API__GenerationHandler,
  omInvoice__API__SettingsHandler,
  public__Channels__PublicChannelsHandler,
  public__ListOfValues__LOVHandler,
  public__Security__SecurityHandler,
  user__ListOfValues__LOVHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', marketplaces__OrdersV3__BatchesHandler)
  .route('/', marketplaces__OrdersV3__GlobalHandler)
  .route('/', marketplaces__OrdersV3__ListHandler)
  .route('/', marketplaces__OrdersV3__OrderHandler)
  .route('/', public__Channels__PublicChannelsHandler)
  .route('/', public__ListOfValues__LOVHandler)
  .route('/', public__Security__SecurityHandler)
  .route('/', analytics__GlobalHandler)
  .route('/', analytics__StatisticsHandler)
  .route('/', analytics__TrackingHandler)
  .route('/', analytics__OptimisationsHandler)
  .route('/', analytics__ReportsHandler)
  .route('/', analytics__RulesHandler)
  .route('/', catalogs__GlobalHandler)
  .route('/', catalogs__ImportationProcessHandler)
  .route('/', catalogs__CatalogHandler)
  .route('/', catalogs__AutoHandler)
  .route('/', catalogs__ImportationCatalogInfoHandler)
  .route('/', channelCatalogs__GlobalHandler)
  .route('/', channelCatalogs__ProductsHandler)
  .route('/', channelCatalogs__CategoriesHandler)
  .route('/', channelCatalogs__ColumnMappingsHandler)
  .route('/', channelCatalogs__SettingsHandler)
  .route('/', channelCatalogs__ExclusionFiltersHandler)
  .route('/', channelCatalogs__ExportationsHandler)
  .route('/', channelCatalogs__ProductsOptimisationHandler)
  .route('/', channelCatalogs__ProductsOverridesHandler)
  .route('/', channels__ChannelsGlobalHandler)
  .route('/', customer__GlobalHandler)
  .route('/', customer__AccountHandler)
  .route('/', customer__ContractsHandler)
  .route('/', customer__FriendsHandler)
  .route('/', customer__InvoicesHandler)
  .route('/', customer__SecurityHandler)
  .route('/', customer__StoresHandler)
  .route('/', customer__AlertsHandler)
  .route('/', customer__RightsHandler)
  .route('/', customer__SharesHandler)
  .route('/', channelCatalogs__LegacyTracking__GlobalHandler)
  .route('/', user__ListOfValues__LOVHandler)
  .route('/', marketplaces__ChannelCatalogs__GlobalHandler)
  .route('/', marketplaces__ChannelCatalogs__PublicationsHandler)
  .route('/', marketplaces__ChannelCatalogs__SettingsHandler)
  .route('/', marketplaces__Orders__GlobalHandler)
  .route('/', marketplaces__Orders__AutoTransitionsHandler)
  .route('/', marketplaces__Orders__BatchesHandler)
  .route('/', marketplaces__Orders__ExportsHandler)
  .route('/', omInvoice__API__GenerationHandler)
  .route('/', omInvoice__API__SettingsHandler)
  .route('/', marketplaces__Orders__ListHandler)
  .route('/', marketplaces__Orders__Subscriptions__SubscriptionsHandler)
  .route('/', marketplaces__Orders__OrderHandler)

export default app
