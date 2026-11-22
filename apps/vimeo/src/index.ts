import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsAlbumVideosHandler,
  albumsCustomAlbumLogosHandler,
  albumsCustomAlbumThumbnailsHandler,
  albumsEssentialsHandler,
  albumsVideosHandler,
  apiInformationHandler,
  authenticationExtrasEssentialsHandler,
  categoriesChannelsHandler,
  categoriesEssentialsHandler,
  categoriesGroupsHandler,
  categoriesSubscriptionsHandler,
  categoriesVideosHandler,
  channelsCategoriesHandler,
  channelsEssentialsHandler,
  channelsModeratorsHandler,
  channelsPrivateChannelMembersHandler,
  channelsSubscriptionsAndSubscribersHandler,
  channelsTagsHandler,
  channelsVideosHandler,
  embedPresetsCustomLogosHandler,
  embedPresetsEssentialsHandler,
  embedPresetsVideosHandler,
  groupsEssentialsHandler,
  groupsSubscriptionsHandler,
  groupsUsersHandler,
  groupsVideosHandler,
  likesEssentialsHandler,
  onDemandBackgroundsHandler,
  onDemandEssentialsHandler,
  onDemandGenresHandler,
  onDemandPostersHandler,
  onDemandPromotionsHandler,
  onDemandPurchasesAndRentalsHandler,
  onDemandRegionsHandler,
  onDemandSeasonsHandler,
  onDemandVideosHandler,
  portfoliosEssentialsHandler,
  portfoliosVideosHandler,
  projectsEssentialsHandler,
  projectsVideosHandler,
  tagsEssentialsHandler,
  tutorialEssentialsHandler,
  usersEssentialsHandler,
  usersFeedsHandler,
  usersFollowersHandler,
  usersInternalHandler,
  usersPicturesHandler,
  usersWatchHistoryHandler,
  videosCommentsHandler,
  videosContentRatingsHandler,
  videosCreativeCommonsHandler,
  videosCreditsHandler,
  videosEmbedPrivacyHandler,
  videosEssentialsHandler,
  videosLanguagesHandler,
  videosRecommendationsHandler,
  videosTagsHandler,
  videosTextTracksHandler,
  videosThumbnailsHandler,
  videosUploadsHandler,
  videosVersionsHandler,
  videosViewingPrivacyHandler,
  watchLaterQueueEssentialsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiInformationHandler)
  .route('/', categoriesEssentialsHandler)
  .route('/', categoriesChannelsHandler)
  .route('/', categoriesGroupsHandler)
  .route('/', categoriesVideosHandler)
  .route('/', channelsEssentialsHandler)
  .route('/', channelsCategoriesHandler)
  .route('/', channelsModeratorsHandler)
  .route('/', channelsPrivateChannelMembersHandler)
  .route('/', channelsTagsHandler)
  .route('/', channelsSubscriptionsAndSubscribersHandler)
  .route('/', channelsVideosHandler)
  .route('/', videosCommentsHandler)
  .route('/', videosCreditsHandler)
  .route('/', likesEssentialsHandler)
  .route('/', videosThumbnailsHandler)
  .route('/', videosViewingPrivacyHandler)
  .route('/', videosTextTracksHandler)
  .route('/', videosContentRatingsHandler)
  .route('/', videosCreativeCommonsHandler)
  .route('/', groupsEssentialsHandler)
  .route('/', groupsUsersHandler)
  .route('/', groupsVideosHandler)
  .route('/', videosLanguagesHandler)
  .route('/', usersEssentialsHandler)
  .route('/', albumsEssentialsHandler)
  .route('/', albumsAlbumVideosHandler)
  .route('/', videosEssentialsHandler)
  .route('/', categoriesSubscriptionsHandler)
  .route('/', embedPresetsCustomLogosHandler)
  .route('/', usersFeedsHandler)
  .route('/', usersFollowersHandler)
  .route('/', groupsSubscriptionsHandler)
  .route('/', onDemandEssentialsHandler)
  .route('/', onDemandPurchasesAndRentalsHandler)
  .route('/', usersPicturesHandler)
  .route('/', portfoliosEssentialsHandler)
  .route('/', portfoliosVideosHandler)
  .route('/', embedPresetsEssentialsHandler)
  .route('/', embedPresetsVideosHandler)
  .route('/', projectsEssentialsHandler)
  .route('/', projectsVideosHandler)
  .route('/', videosUploadsHandler)
  .route('/', usersWatchHistoryHandler)
  .route('/', watchLaterQueueEssentialsHandler)
  .route('/', authenticationExtrasEssentialsHandler)
  .route('/', onDemandGenresHandler)
  .route('/', onDemandBackgroundsHandler)
  .route('/', onDemandPostersHandler)
  .route('/', onDemandPromotionsHandler)
  .route('/', onDemandRegionsHandler)
  .route('/', onDemandSeasonsHandler)
  .route('/', onDemandVideosHandler)
  .route('/', tagsEssentialsHandler)
  .route('/', videosTagsHandler)
  .route('/', tutorialEssentialsHandler)
  .route('/', usersInternalHandler)
  .route('/', albumsCustomAlbumThumbnailsHandler)
  .route('/', albumsCustomAlbumLogosHandler)
  .route('/', albumsVideosHandler)
  .route('/', videosEmbedPrivacyHandler)
  .route('/', videosVersionsHandler)
  .route('/', videosRecommendationsHandler)

export default app
