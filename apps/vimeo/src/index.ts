import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdCategoriesCategoryRoute,
  deleteChannelsChannelIdModeratorsRoute,
  deleteChannelsChannelIdModeratorsUserIdRoute,
  deleteChannelsChannelIdPrivacyUsersUserIdRoute,
  deleteChannelsChannelIdRoute,
  deleteChannelsChannelIdTagsWordRoute,
  deleteChannelsChannelIdVideosRoute,
  deleteChannelsChannelIdVideosVideoIdRoute,
  deleteGroupsGroupIdRoute,
  deleteGroupsGroupIdVideosVideoIdRoute,
  deleteMeAlbumsAlbumIdRoute,
  deleteMeAlbumsAlbumIdVideosVideoIdRoute,
  deleteMeCategoriesCategoryRoute,
  deleteMeChannelsChannelIdRoute,
  deleteMeFollowingFollowUserIdRoute,
  deleteMeGroupsGroupIdRoute,
  deleteMeLikesVideoIdRoute,
  deleteMePicturesPortraitsetIdRoute,
  deleteMePortfoliosPortfolioIdVideosVideoIdRoute,
  deleteMeProjectsProjectIdRoute,
  deleteMeProjectsProjectIdVideosRoute,
  deleteMeProjectsProjectIdVideosVideoIdRoute,
  deleteMeWatchedVideosRoute,
  deleteMeWatchedVideosVideoIdRoute,
  deleteMeWatchlaterVideoIdRoute,
  deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  deleteOndemandPagesOndemandIdGenresGenreIdRoute,
  deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  deleteOndemandPagesOndemandIdRegionsCountryRoute,
  deleteOndemandPagesOndemandIdRegionsRoute,
  deleteOndemandPagesOndemandIdRoute,
  deleteOndemandPagesOndemandIdVideosVideoIdRoute,
  deleteTokensRoute,
  deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  deleteUsersUserIdAlbumsAlbumIdRoute,
  deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  deleteUsersUserIdCategoriesCategoryRoute,
  deleteUsersUserIdChannelsChannelIdRoute,
  deleteUsersUserIdFollowingFollowUserIdRoute,
  deleteUsersUserIdGroupsGroupIdRoute,
  deleteUsersUserIdLikesVideoIdRoute,
  deleteUsersUserIdPicturesPortraitsetIdRoute,
  deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  deleteUsersUserIdProjectsProjectIdRoute,
  deleteUsersUserIdProjectsProjectIdVideosRoute,
  deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute,
  deleteUsersUserIdUploadsUploadIdRoute,
  deleteUsersUserIdWatchlaterVideoIdRoute,
  deleteVideosVideoIdCommentsCommentIdRoute,
  deleteVideosVideoIdCreditsCreditIdRoute,
  deleteVideosVideoIdPicturesPictureIdRoute,
  deleteVideosVideoIdPresetsPresetIdRoute,
  deleteVideosVideoIdPrivacyDomainsDomainRoute,
  deleteVideosVideoIdPrivacyUsersUserIdRoute,
  deleteVideosVideoIdRoute,
  deleteVideosVideoIdTagsWordRoute,
  deleteVideosVideoIdTexttracksTexttrackIdRoute,
  getCategoriesCategoryChannelsRoute,
  getCategoriesCategoryGroupsRoute,
  getCategoriesCategoryRoute,
  getCategoriesCategoryVideosRoute,
  getCategoriesCategoryVideosVideoIdRoute,
  getCategoriesRoute,
  getChannelsChannelIdCategoriesRoute,
  getChannelsChannelIdModeratorsRoute,
  getChannelsChannelIdModeratorsUserIdRoute,
  getChannelsChannelIdPrivacyUsersRoute,
  getChannelsChannelIdRoute,
  getChannelsChannelIdTagsRoute,
  getChannelsChannelIdTagsWordRoute,
  getChannelsChannelIdUsersRoute,
  getChannelsChannelIdVideosRoute,
  getChannelsChannelIdVideosVideoIdCommentsRoute,
  getChannelsChannelIdVideosVideoIdCreditsRoute,
  getChannelsChannelIdVideosVideoIdLikesRoute,
  getChannelsChannelIdVideosVideoIdPicturesRoute,
  getChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  getChannelsChannelIdVideosVideoIdRoute,
  getChannelsChannelIdVideosVideoIdTexttracksRoute,
  getChannelsRoute,
  getContentratingsRoute,
  getCreativecommonsRoute,
  getGroupsGroupIdRoute,
  getGroupsGroupIdUsersRoute,
  getGroupsGroupIdVideosRoute,
  getGroupsGroupIdVideosVideoIdRoute,
  getGroupsRoute,
  getLanguagesRoute,
  getMeAlbumsAlbumIdRoute,
  getMeAlbumsAlbumIdVideosRoute,
  getMeAlbumsAlbumIdVideosVideoIdRoute,
  getMeAlbumsRoute,
  getMeAppearancesRoute,
  getMeCategoriesCategoryRoute,
  getMeCategoriesRoute,
  getMeChannelsChannelIdRoute,
  getMeChannelsRoute,
  getMeCustomlogosLogoIdRoute,
  getMeCustomlogosRoute,
  getMeFeedRoute,
  getMeFollowersRoute,
  getMeFollowingFollowUserIdRoute,
  getMeFollowingRoute,
  getMeGroupsGroupIdRoute,
  getMeGroupsRoute,
  getMeLikesRoute,
  getMeLikesVideoIdRoute,
  getMeOndemandPagesRoute,
  getMeOndemandPurchasesOndemandIdRoute,
  getMeOndemandPurchasesRoute,
  getMePicturesPortraitsetIdRoute,
  getMePicturesRoute,
  getMePortfoliosPortfolioIdRoute,
  getMePortfoliosPortfolioIdVideosRoute,
  getMePortfoliosPortfolioIdVideosVideoIdRoute,
  getMePortfoliosRoute,
  getMePresetsPresetIdRoute,
  getMePresetsPresetIdVideosRoute,
  getMePresetsRoute,
  getMeProjectsProjectIdRoute,
  getMeProjectsProjectIdVideosRoute,
  getMeProjectsRoute,
  getMeRoute,
  getMeVideosRoute,
  getMeVideosVideoIdRoute,
  getMeWatchedVideosRoute,
  getMeWatchlaterRoute,
  getMeWatchlaterVideoIdRoute,
  getOauthVerifyRoute,
  getOndemandGenresGenreIdPagesOndemandIdRoute,
  getOndemandGenresGenreIdPagesRoute,
  getOndemandGenresGenreIdRoute,
  getOndemandGenresRoute,
  getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  getOndemandPagesOndemandIdBackgroundsRoute,
  getOndemandPagesOndemandIdGenresGenreIdRoute,
  getOndemandPagesOndemandIdGenresRoute,
  getOndemandPagesOndemandIdLikesRoute,
  getOndemandPagesOndemandIdPicturesPosterIdRoute,
  getOndemandPagesOndemandIdPicturesRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  getOndemandPagesOndemandIdPromotionsRoute,
  getOndemandPagesOndemandIdRegionsCountryRoute,
  getOndemandPagesOndemandIdRegionsRoute,
  getOndemandPagesOndemandIdRoute,
  getOndemandPagesOndemandIdSeasonsRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute,
  getOndemandPagesOndemandIdVideosRoute,
  getOndemandPagesOndemandIdVideosVideoIdRoute,
  getOndemandRegionsCountryRoute,
  getOndemandRegionsRoute,
  getRoute,
  getTagsWordRoute,
  getTagsWordVideosRoute,
  getTutorialRoute,
  getUsersRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosRoute,
  getUsersUserIdAlbumsAlbumIdRoute,
  getUsersUserIdAlbumsAlbumIdVideosRoute,
  getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  getUsersUserIdAlbumsRoute,
  getUsersUserIdAppearancesRoute,
  getUsersUserIdCategoriesCategoryRoute,
  getUsersUserIdCategoriesRoute,
  getUsersUserIdChannelsChannelIdRoute,
  getUsersUserIdChannelsRoute,
  getUsersUserIdCustomlogosLogoIdRoute,
  getUsersUserIdCustomlogosRoute,
  getUsersUserIdFeedRoute,
  getUsersUserIdFollowersRoute,
  getUsersUserIdFollowingFollowUserIdRoute,
  getUsersUserIdFollowingRoute,
  getUsersUserIdGroupsGroupIdRoute,
  getUsersUserIdGroupsRoute,
  getUsersUserIdLikesRoute,
  getUsersUserIdLikesVideoIdRoute,
  getUsersUserIdOndemandPagesRoute,
  getUsersUserIdOndemandPurchasesRoute,
  getUsersUserIdPicturesPortraitsetIdRoute,
  getUsersUserIdPicturesRoute,
  getUsersUserIdPortfoliosPortfolioIdRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  getUsersUserIdPortfoliosRoute,
  getUsersUserIdPresetsPresetIdRoute,
  getUsersUserIdPresetsPresetIdVideosRoute,
  getUsersUserIdPresetsRoute,
  getUsersUserIdProjectsProjectIdRoute,
  getUsersUserIdProjectsProjectIdVideosRoute,
  getUsersUserIdProjectsRoute,
  getUsersUserIdRoute,
  getUsersUserIdUploadsUploadIdRoute,
  getUsersUserIdVideosRoute,
  getUsersUserIdVideosVideoIdRoute,
  getUsersUserIdWatchlaterRoute,
  getUsersUserIdWatchlaterVideoIdRoute,
  getVideosRoute,
  getVideosVideoIdAvailableAlbumsRoute,
  getVideosVideoIdAvailableChannelsRoute,
  getVideosVideoIdCategoriesRoute,
  getVideosVideoIdCommentsCommentIdRepliesRoute,
  getVideosVideoIdCommentsCommentIdRoute,
  getVideosVideoIdCommentsRoute,
  getVideosVideoIdCreditsCreditIdRoute,
  getVideosVideoIdCreditsRoute,
  getVideosVideoIdLikesRoute,
  getVideosVideoIdPicturesPictureIdRoute,
  getVideosVideoIdPicturesRoute,
  getVideosVideoIdPresetsPresetIdRoute,
  getVideosVideoIdPrivacyDomainsRoute,
  getVideosVideoIdPrivacyUsersRoute,
  getVideosVideoIdRoute,
  getVideosVideoIdTagsRoute,
  getVideosVideoIdTagsWordRoute,
  getVideosVideoIdTexttracksRoute,
  getVideosVideoIdTexttracksTexttrackIdRoute,
  getVideosVideoIdTimelinethumbnailsThumbnailIdRoute,
  getVideosVideoIdVideosRoute,
  patchChannelsChannelIdModeratorsRoute,
  patchChannelsChannelIdRoute,
  patchMeAlbumsAlbumIdRoute,
  patchMePicturesPortraitsetIdRoute,
  patchMePresetsPresetIdRoute,
  patchMeProjectsProjectIdRoute,
  patchMeRoute,
  patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  patchOndemandPagesOndemandIdPicturesPosterIdRoute,
  patchOndemandPagesOndemandIdRoute,
  patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  patchUsersUserIdAlbumsAlbumIdRoute,
  patchUsersUserIdPicturesPortraitsetIdRoute,
  patchUsersUserIdPresetsPresetIdRoute,
  patchUsersUserIdProjectsProjectIdRoute,
  patchUsersUserIdRoute,
  patchVideosVideoIdCommentsCommentIdRoute,
  patchVideosVideoIdCreditsCreditIdRoute,
  patchVideosVideoIdPicturesPictureIdRoute,
  patchVideosVideoIdRoute,
  patchVideosVideoIdTexttracksTexttrackIdRoute,
  postChannelsChannelIdVideosVideoIdCommentsRoute,
  postChannelsChannelIdVideosVideoIdCreditsRoute,
  postChannelsChannelIdVideosVideoIdPicturesRoute,
  postChannelsChannelIdVideosVideoIdTexttracksRoute,
  postChannelsRoute,
  postGroupsRoute,
  postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  postMeAlbumsRoute,
  postMeCustomlogosRoute,
  postMeFollowingRoute,
  postMeOndemandPagesRoute,
  postMePicturesRoute,
  postMeProjectsRoute,
  postMeVideosRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeClientRoute,
  postOauthAuthorizeVimeoOauth1Route,
  postOndemandPagesOndemandIdBackgroundsRoute,
  postOndemandPagesOndemandIdPicturesRoute,
  postOndemandPagesOndemandIdPromotionsRoute,
  postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
  postUsersUserIdAlbumsAlbumIdLogosRoute,
  postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  postUsersUserIdAlbumsRoute,
  postUsersUserIdCustomlogosRoute,
  postUsersUserIdFollowingRoute,
  postUsersUserIdOndemandPagesRoute,
  postUsersUserIdPicturesRoute,
  postUsersUserIdProjectsRoute,
  postUsersUserIdVideosRoute,
  postVideosVideoIdCommentsCommentIdRepliesRoute,
  postVideosVideoIdCommentsRoute,
  postVideosVideoIdCreditsRoute,
  postVideosVideoIdPicturesRoute,
  postVideosVideoIdTexttracksRoute,
  postVideosVideoIdTimelinethumbnailsRoute,
  postVideosVideoIdVersionsRoute,
  putChannelsChannelIdCategoriesCategoryRoute,
  putChannelsChannelIdCategoriesRoute,
  putChannelsChannelIdModeratorsRoute,
  putChannelsChannelIdModeratorsUserIdRoute,
  putChannelsChannelIdPrivacyUsersRoute,
  putChannelsChannelIdPrivacyUsersUserIdRoute,
  putChannelsChannelIdTagsRoute,
  putChannelsChannelIdTagsWordRoute,
  putChannelsChannelIdVideosRoute,
  putChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  putChannelsChannelIdVideosVideoIdRoute,
  putGroupsGroupIdVideosVideoIdRoute,
  putMeAlbumsAlbumIdVideosRoute,
  putMeAlbumsAlbumIdVideosVideoIdRoute,
  putMeCategoriesCategoryRoute,
  putMeChannelsChannelIdRoute,
  putMeFollowingFollowUserIdRoute,
  putMeGroupsGroupIdRoute,
  putMeLikesVideoIdRoute,
  putMePortfoliosPortfolioIdVideosVideoIdRoute,
  putMeProjectsProjectIdVideosRoute,
  putMeProjectsProjectIdVideosVideoIdRoute,
  putMeWatchlaterVideoIdRoute,
  putOndemandPagesOndemandIdGenresGenreIdRoute,
  putOndemandPagesOndemandIdRegionsCountryRoute,
  putOndemandPagesOndemandIdRegionsRoute,
  putOndemandPagesOndemandIdVideosVideoIdRoute,
  putUsersUserIdAlbumsAlbumIdVideosRoute,
  putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  putUsersUserIdCategoriesCategoryRoute,
  putUsersUserIdChannelsChannelIdRoute,
  putUsersUserIdFollowingFollowUserIdRoute,
  putUsersUserIdGroupsGroupIdRoute,
  putUsersUserIdLikesVideoIdRoute,
  putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  putUsersUserIdProjectsProjectIdVideosRoute,
  putUsersUserIdProjectsProjectIdVideosVideoIdRoute,
  putUsersUserIdWatchlaterVideoIdRoute,
  putVideosVideoIdCategoriesRoute,
  putVideosVideoIdPresetsPresetIdRoute,
  putVideosVideoIdPrivacyDomainsDomainRoute,
  putVideosVideoIdPrivacyUsersRoute,
  putVideosVideoIdPrivacyUsersUserIdRoute,
  putVideosVideoIdTagsRoute,
  putVideosVideoIdTagsWordRoute,
} from './routes'
import {
  deleteChannelsChannelIdCategoriesCategoryRouteHandler,
  deleteChannelsChannelIdModeratorsRouteHandler,
  deleteChannelsChannelIdModeratorsUserIdRouteHandler,
  deleteChannelsChannelIdPrivacyUsersUserIdRouteHandler,
  deleteChannelsChannelIdRouteHandler,
  deleteChannelsChannelIdTagsWordRouteHandler,
  deleteChannelsChannelIdVideosRouteHandler,
  deleteChannelsChannelIdVideosVideoIdRouteHandler,
  deleteGroupsGroupIdRouteHandler,
  deleteGroupsGroupIdVideosVideoIdRouteHandler,
  deleteMeAlbumsAlbumIdRouteHandler,
  deleteMeAlbumsAlbumIdVideosVideoIdRouteHandler,
  deleteMeCategoriesCategoryRouteHandler,
  deleteMeChannelsChannelIdRouteHandler,
  deleteMeFollowingFollowUserIdRouteHandler,
  deleteMeGroupsGroupIdRouteHandler,
  deleteMeLikesVideoIdRouteHandler,
  deleteMePicturesPortraitsetIdRouteHandler,
  deleteMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  deleteMeProjectsProjectIdRouteHandler,
  deleteMeProjectsProjectIdVideosRouteHandler,
  deleteMeProjectsProjectIdVideosVideoIdRouteHandler,
  deleteMeWatchedVideosRouteHandler,
  deleteMeWatchedVideosVideoIdRouteHandler,
  deleteMeWatchlaterVideoIdRouteHandler,
  deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  deleteOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  deleteOndemandPagesOndemandIdPromotionsPromotionIdRouteHandler,
  deleteOndemandPagesOndemandIdRegionsCountryRouteHandler,
  deleteOndemandPagesOndemandIdRegionsRouteHandler,
  deleteOndemandPagesOndemandIdRouteHandler,
  deleteOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  deleteTokensRouteHandler,
  deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  deleteUsersUserIdAlbumsAlbumIdRouteHandler,
  deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  deleteUsersUserIdCategoriesCategoryRouteHandler,
  deleteUsersUserIdChannelsChannelIdRouteHandler,
  deleteUsersUserIdFollowingFollowUserIdRouteHandler,
  deleteUsersUserIdGroupsGroupIdRouteHandler,
  deleteUsersUserIdLikesVideoIdRouteHandler,
  deleteUsersUserIdPicturesPortraitsetIdRouteHandler,
  deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  deleteUsersUserIdProjectsProjectIdRouteHandler,
  deleteUsersUserIdProjectsProjectIdVideosRouteHandler,
  deleteUsersUserIdProjectsProjectIdVideosVideoIdRouteHandler,
  deleteUsersUserIdUploadsUploadIdRouteHandler,
  deleteUsersUserIdWatchlaterVideoIdRouteHandler,
  deleteVideosVideoIdCommentsCommentIdRouteHandler,
  deleteVideosVideoIdCreditsCreditIdRouteHandler,
  deleteVideosVideoIdPicturesPictureIdRouteHandler,
  deleteVideosVideoIdPresetsPresetIdRouteHandler,
  deleteVideosVideoIdPrivacyDomainsDomainRouteHandler,
  deleteVideosVideoIdPrivacyUsersUserIdRouteHandler,
  deleteVideosVideoIdRouteHandler,
  deleteVideosVideoIdTagsWordRouteHandler,
  deleteVideosVideoIdTexttracksTexttrackIdRouteHandler,
  getCategoriesCategoryChannelsRouteHandler,
  getCategoriesCategoryGroupsRouteHandler,
  getCategoriesCategoryRouteHandler,
  getCategoriesCategoryVideosRouteHandler,
  getCategoriesCategoryVideosVideoIdRouteHandler,
  getCategoriesRouteHandler,
  getChannelsChannelIdCategoriesRouteHandler,
  getChannelsChannelIdModeratorsRouteHandler,
  getChannelsChannelIdModeratorsUserIdRouteHandler,
  getChannelsChannelIdPrivacyUsersRouteHandler,
  getChannelsChannelIdRouteHandler,
  getChannelsChannelIdTagsRouteHandler,
  getChannelsChannelIdTagsWordRouteHandler,
  getChannelsChannelIdUsersRouteHandler,
  getChannelsChannelIdVideosRouteHandler,
  getChannelsChannelIdVideosVideoIdCommentsRouteHandler,
  getChannelsChannelIdVideosVideoIdCreditsRouteHandler,
  getChannelsChannelIdVideosVideoIdLikesRouteHandler,
  getChannelsChannelIdVideosVideoIdPicturesRouteHandler,
  getChannelsChannelIdVideosVideoIdPrivacyUsersRouteHandler,
  getChannelsChannelIdVideosVideoIdRouteHandler,
  getChannelsChannelIdVideosVideoIdTexttracksRouteHandler,
  getChannelsRouteHandler,
  getContentratingsRouteHandler,
  getCreativecommonsRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsGroupIdUsersRouteHandler,
  getGroupsGroupIdVideosRouteHandler,
  getGroupsGroupIdVideosVideoIdRouteHandler,
  getGroupsRouteHandler,
  getLanguagesRouteHandler,
  getMeAlbumsAlbumIdRouteHandler,
  getMeAlbumsAlbumIdVideosRouteHandler,
  getMeAlbumsAlbumIdVideosVideoIdRouteHandler,
  getMeAlbumsRouteHandler,
  getMeAppearancesRouteHandler,
  getMeCategoriesCategoryRouteHandler,
  getMeCategoriesRouteHandler,
  getMeChannelsChannelIdRouteHandler,
  getMeChannelsRouteHandler,
  getMeCustomlogosLogoIdRouteHandler,
  getMeCustomlogosRouteHandler,
  getMeFeedRouteHandler,
  getMeFollowersRouteHandler,
  getMeFollowingFollowUserIdRouteHandler,
  getMeFollowingRouteHandler,
  getMeGroupsGroupIdRouteHandler,
  getMeGroupsRouteHandler,
  getMeLikesRouteHandler,
  getMeLikesVideoIdRouteHandler,
  getMeOndemandPagesRouteHandler,
  getMeOndemandPurchasesOndemandIdRouteHandler,
  getMeOndemandPurchasesRouteHandler,
  getMePicturesPortraitsetIdRouteHandler,
  getMePicturesRouteHandler,
  getMePortfoliosPortfolioIdRouteHandler,
  getMePortfoliosPortfolioIdVideosRouteHandler,
  getMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  getMePortfoliosRouteHandler,
  getMePresetsPresetIdRouteHandler,
  getMePresetsPresetIdVideosRouteHandler,
  getMePresetsRouteHandler,
  getMeProjectsProjectIdRouteHandler,
  getMeProjectsProjectIdVideosRouteHandler,
  getMeProjectsRouteHandler,
  getMeRouteHandler,
  getMeVideosRouteHandler,
  getMeVideosVideoIdRouteHandler,
  getMeWatchedVideosRouteHandler,
  getMeWatchlaterRouteHandler,
  getMeWatchlaterVideoIdRouteHandler,
  getOauthVerifyRouteHandler,
  getOndemandGenresGenreIdPagesOndemandIdRouteHandler,
  getOndemandGenresGenreIdPagesRouteHandler,
  getOndemandGenresGenreIdRouteHandler,
  getOndemandGenresRouteHandler,
  getOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  getOndemandPagesOndemandIdBackgroundsRouteHandler,
  getOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  getOndemandPagesOndemandIdGenresRouteHandler,
  getOndemandPagesOndemandIdLikesRouteHandler,
  getOndemandPagesOndemandIdPicturesPosterIdRouteHandler,
  getOndemandPagesOndemandIdPicturesRouteHandler,
  getOndemandPagesOndemandIdPromotionsPromotionIdCodesRouteHandler,
  getOndemandPagesOndemandIdPromotionsPromotionIdRouteHandler,
  getOndemandPagesOndemandIdPromotionsRouteHandler,
  getOndemandPagesOndemandIdRegionsCountryRouteHandler,
  getOndemandPagesOndemandIdRegionsRouteHandler,
  getOndemandPagesOndemandIdRouteHandler,
  getOndemandPagesOndemandIdSeasonsRouteHandler,
  getOndemandPagesOndemandIdSeasonsSeasonIdRouteHandler,
  getOndemandPagesOndemandIdSeasonsSeasonIdVideosRouteHandler,
  getOndemandPagesOndemandIdVideosRouteHandler,
  getOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  getOndemandRegionsCountryRouteHandler,
  getOndemandRegionsRouteHandler,
  getRouteHandler,
  getTagsWordRouteHandler,
  getTagsWordVideosRouteHandler,
  getTutorialRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsRouteHandler,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  getUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  getUsersUserIdAlbumsAlbumIdLogosRouteHandler,
  getUsersUserIdAlbumsAlbumIdRouteHandler,
  getUsersUserIdAlbumsAlbumIdVideosRouteHandler,
  getUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  getUsersUserIdAlbumsRouteHandler,
  getUsersUserIdAppearancesRouteHandler,
  getUsersUserIdCategoriesCategoryRouteHandler,
  getUsersUserIdCategoriesRouteHandler,
  getUsersUserIdChannelsChannelIdRouteHandler,
  getUsersUserIdChannelsRouteHandler,
  getUsersUserIdCustomlogosLogoIdRouteHandler,
  getUsersUserIdCustomlogosRouteHandler,
  getUsersUserIdFeedRouteHandler,
  getUsersUserIdFollowersRouteHandler,
  getUsersUserIdFollowingFollowUserIdRouteHandler,
  getUsersUserIdFollowingRouteHandler,
  getUsersUserIdGroupsGroupIdRouteHandler,
  getUsersUserIdGroupsRouteHandler,
  getUsersUserIdLikesRouteHandler,
  getUsersUserIdLikesVideoIdRouteHandler,
  getUsersUserIdOndemandPagesRouteHandler,
  getUsersUserIdOndemandPurchasesRouteHandler,
  getUsersUserIdPicturesPortraitsetIdRouteHandler,
  getUsersUserIdPicturesRouteHandler,
  getUsersUserIdPortfoliosPortfolioIdRouteHandler,
  getUsersUserIdPortfoliosPortfolioIdVideosRouteHandler,
  getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  getUsersUserIdPortfoliosRouteHandler,
  getUsersUserIdPresetsPresetIdRouteHandler,
  getUsersUserIdPresetsPresetIdVideosRouteHandler,
  getUsersUserIdPresetsRouteHandler,
  getUsersUserIdProjectsProjectIdRouteHandler,
  getUsersUserIdProjectsProjectIdVideosRouteHandler,
  getUsersUserIdProjectsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdUploadsUploadIdRouteHandler,
  getUsersUserIdVideosRouteHandler,
  getUsersUserIdVideosVideoIdRouteHandler,
  getUsersUserIdWatchlaterRouteHandler,
  getUsersUserIdWatchlaterVideoIdRouteHandler,
  getVideosRouteHandler,
  getVideosVideoIdAvailableAlbumsRouteHandler,
  getVideosVideoIdAvailableChannelsRouteHandler,
  getVideosVideoIdCategoriesRouteHandler,
  getVideosVideoIdCommentsCommentIdRepliesRouteHandler,
  getVideosVideoIdCommentsCommentIdRouteHandler,
  getVideosVideoIdCommentsRouteHandler,
  getVideosVideoIdCreditsCreditIdRouteHandler,
  getVideosVideoIdCreditsRouteHandler,
  getVideosVideoIdLikesRouteHandler,
  getVideosVideoIdPicturesPictureIdRouteHandler,
  getVideosVideoIdPicturesRouteHandler,
  getVideosVideoIdPresetsPresetIdRouteHandler,
  getVideosVideoIdPrivacyDomainsRouteHandler,
  getVideosVideoIdPrivacyUsersRouteHandler,
  getVideosVideoIdRouteHandler,
  getVideosVideoIdTagsRouteHandler,
  getVideosVideoIdTagsWordRouteHandler,
  getVideosVideoIdTexttracksRouteHandler,
  getVideosVideoIdTexttracksTexttrackIdRouteHandler,
  getVideosVideoIdTimelinethumbnailsThumbnailIdRouteHandler,
  getVideosVideoIdVideosRouteHandler,
  patchChannelsChannelIdModeratorsRouteHandler,
  patchChannelsChannelIdRouteHandler,
  patchMeAlbumsAlbumIdRouteHandler,
  patchMePicturesPortraitsetIdRouteHandler,
  patchMePresetsPresetIdRouteHandler,
  patchMeProjectsProjectIdRouteHandler,
  patchMeRouteHandler,
  patchOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  patchOndemandPagesOndemandIdPicturesPosterIdRouteHandler,
  patchOndemandPagesOndemandIdRouteHandler,
  patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  patchUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  patchUsersUserIdAlbumsAlbumIdRouteHandler,
  patchUsersUserIdPicturesPortraitsetIdRouteHandler,
  patchUsersUserIdPresetsPresetIdRouteHandler,
  patchUsersUserIdProjectsProjectIdRouteHandler,
  patchUsersUserIdRouteHandler,
  patchVideosVideoIdCommentsCommentIdRouteHandler,
  patchVideosVideoIdCreditsCreditIdRouteHandler,
  patchVideosVideoIdPicturesPictureIdRouteHandler,
  patchVideosVideoIdRouteHandler,
  patchVideosVideoIdTexttracksTexttrackIdRouteHandler,
  postChannelsChannelIdVideosVideoIdCommentsRouteHandler,
  postChannelsChannelIdVideosVideoIdCreditsRouteHandler,
  postChannelsChannelIdVideosVideoIdPicturesRouteHandler,
  postChannelsChannelIdVideosVideoIdTexttracksRouteHandler,
  postChannelsRouteHandler,
  postGroupsRouteHandler,
  postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRouteHandler,
  postMeAlbumsRouteHandler,
  postMeCustomlogosRouteHandler,
  postMeFollowingRouteHandler,
  postMeOndemandPagesRouteHandler,
  postMePicturesRouteHandler,
  postMeProjectsRouteHandler,
  postMeVideosRouteHandler,
  postOauthAccessTokenRouteHandler,
  postOauthAuthorizeClientRouteHandler,
  postOauthAuthorizeVimeoOauth1RouteHandler,
  postOndemandPagesOndemandIdBackgroundsRouteHandler,
  postOndemandPagesOndemandIdPicturesRouteHandler,
  postOndemandPagesOndemandIdPromotionsRouteHandler,
  postUsersUserIdAlbumsAlbumIdCustomThumbnailsRouteHandler,
  postUsersUserIdAlbumsAlbumIdLogosRouteHandler,
  postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRouteHandler,
  postUsersUserIdAlbumsRouteHandler,
  postUsersUserIdCustomlogosRouteHandler,
  postUsersUserIdFollowingRouteHandler,
  postUsersUserIdOndemandPagesRouteHandler,
  postUsersUserIdPicturesRouteHandler,
  postUsersUserIdProjectsRouteHandler,
  postUsersUserIdVideosRouteHandler,
  postVideosVideoIdCommentsCommentIdRepliesRouteHandler,
  postVideosVideoIdCommentsRouteHandler,
  postVideosVideoIdCreditsRouteHandler,
  postVideosVideoIdPicturesRouteHandler,
  postVideosVideoIdTexttracksRouteHandler,
  postVideosVideoIdTimelinethumbnailsRouteHandler,
  postVideosVideoIdVersionsRouteHandler,
  putChannelsChannelIdCategoriesCategoryRouteHandler,
  putChannelsChannelIdCategoriesRouteHandler,
  putChannelsChannelIdModeratorsRouteHandler,
  putChannelsChannelIdModeratorsUserIdRouteHandler,
  putChannelsChannelIdPrivacyUsersRouteHandler,
  putChannelsChannelIdPrivacyUsersUserIdRouteHandler,
  putChannelsChannelIdTagsRouteHandler,
  putChannelsChannelIdTagsWordRouteHandler,
  putChannelsChannelIdVideosRouteHandler,
  putChannelsChannelIdVideosVideoIdPrivacyUsersRouteHandler,
  putChannelsChannelIdVideosVideoIdRouteHandler,
  putGroupsGroupIdVideosVideoIdRouteHandler,
  putMeAlbumsAlbumIdVideosRouteHandler,
  putMeAlbumsAlbumIdVideosVideoIdRouteHandler,
  putMeCategoriesCategoryRouteHandler,
  putMeChannelsChannelIdRouteHandler,
  putMeFollowingFollowUserIdRouteHandler,
  putMeGroupsGroupIdRouteHandler,
  putMeLikesVideoIdRouteHandler,
  putMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  putMeProjectsProjectIdVideosRouteHandler,
  putMeProjectsProjectIdVideosVideoIdRouteHandler,
  putMeWatchlaterVideoIdRouteHandler,
  putOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  putOndemandPagesOndemandIdRegionsCountryRouteHandler,
  putOndemandPagesOndemandIdRegionsRouteHandler,
  putOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  putUsersUserIdAlbumsAlbumIdVideosRouteHandler,
  putUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  putUsersUserIdCategoriesCategoryRouteHandler,
  putUsersUserIdChannelsChannelIdRouteHandler,
  putUsersUserIdFollowingFollowUserIdRouteHandler,
  putUsersUserIdGroupsGroupIdRouteHandler,
  putUsersUserIdLikesVideoIdRouteHandler,
  putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  putUsersUserIdProjectsProjectIdVideosRouteHandler,
  putUsersUserIdProjectsProjectIdVideosVideoIdRouteHandler,
  putUsersUserIdWatchlaterVideoIdRouteHandler,
  putVideosVideoIdCategoriesRouteHandler,
  putVideosVideoIdPresetsPresetIdRouteHandler,
  putVideosVideoIdPrivacyDomainsDomainRouteHandler,
  putVideosVideoIdPrivacyUsersRouteHandler,
  putVideosVideoIdPrivacyUsersUserIdRouteHandler,
  putVideosVideoIdTagsRouteHandler,
  putVideosVideoIdTagsWordRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesCategoryRoute, getCategoriesCategoryRouteHandler)
  .openapi(getCategoriesCategoryChannelsRoute, getCategoriesCategoryChannelsRouteHandler)
  .openapi(getCategoriesCategoryGroupsRoute, getCategoriesCategoryGroupsRouteHandler)
  .openapi(getCategoriesCategoryVideosRoute, getCategoriesCategoryVideosRouteHandler)
  .openapi(getCategoriesCategoryVideosVideoIdRoute, getCategoriesCategoryVideosVideoIdRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(deleteChannelsChannelIdRoute, deleteChannelsChannelIdRouteHandler)
  .openapi(getChannelsChannelIdRoute, getChannelsChannelIdRouteHandler)
  .openapi(patchChannelsChannelIdRoute, patchChannelsChannelIdRouteHandler)
  .openapi(getChannelsChannelIdCategoriesRoute, getChannelsChannelIdCategoriesRouteHandler)
  .openapi(putChannelsChannelIdCategoriesRoute, putChannelsChannelIdCategoriesRouteHandler)
  .openapi(
    deleteChannelsChannelIdCategoriesCategoryRoute,
    deleteChannelsChannelIdCategoriesCategoryRouteHandler,
  )
  .openapi(
    putChannelsChannelIdCategoriesCategoryRoute,
    putChannelsChannelIdCategoriesCategoryRouteHandler,
  )
  .openapi(deleteChannelsChannelIdModeratorsRoute, deleteChannelsChannelIdModeratorsRouteHandler)
  .openapi(getChannelsChannelIdModeratorsRoute, getChannelsChannelIdModeratorsRouteHandler)
  .openapi(patchChannelsChannelIdModeratorsRoute, patchChannelsChannelIdModeratorsRouteHandler)
  .openapi(putChannelsChannelIdModeratorsRoute, putChannelsChannelIdModeratorsRouteHandler)
  .openapi(
    getChannelsChannelIdModeratorsUserIdRoute,
    getChannelsChannelIdModeratorsUserIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdModeratorsUserIdRoute,
    deleteChannelsChannelIdModeratorsUserIdRouteHandler,
  )
  .openapi(
    putChannelsChannelIdModeratorsUserIdRoute,
    putChannelsChannelIdModeratorsUserIdRouteHandler,
  )
  .openapi(getChannelsChannelIdPrivacyUsersRoute, getChannelsChannelIdPrivacyUsersRouteHandler)
  .openapi(putChannelsChannelIdPrivacyUsersRoute, putChannelsChannelIdPrivacyUsersRouteHandler)
  .openapi(
    deleteChannelsChannelIdPrivacyUsersUserIdRoute,
    deleteChannelsChannelIdPrivacyUsersUserIdRouteHandler,
  )
  .openapi(
    putChannelsChannelIdPrivacyUsersUserIdRoute,
    putChannelsChannelIdPrivacyUsersUserIdRouteHandler,
  )
  .openapi(getChannelsChannelIdTagsRoute, getChannelsChannelIdTagsRouteHandler)
  .openapi(putChannelsChannelIdTagsRoute, putChannelsChannelIdTagsRouteHandler)
  .openapi(deleteChannelsChannelIdTagsWordRoute, deleteChannelsChannelIdTagsWordRouteHandler)
  .openapi(getChannelsChannelIdTagsWordRoute, getChannelsChannelIdTagsWordRouteHandler)
  .openapi(putChannelsChannelIdTagsWordRoute, putChannelsChannelIdTagsWordRouteHandler)
  .openapi(getChannelsChannelIdUsersRoute, getChannelsChannelIdUsersRouteHandler)
  .openapi(deleteChannelsChannelIdVideosRoute, deleteChannelsChannelIdVideosRouteHandler)
  .openapi(getChannelsChannelIdVideosRoute, getChannelsChannelIdVideosRouteHandler)
  .openapi(putChannelsChannelIdVideosRoute, putChannelsChannelIdVideosRouteHandler)
  .openapi(
    deleteChannelsChannelIdVideosVideoIdRoute,
    deleteChannelsChannelIdVideosVideoIdRouteHandler,
  )
  .openapi(getChannelsChannelIdVideosVideoIdRoute, getChannelsChannelIdVideosVideoIdRouteHandler)
  .openapi(putChannelsChannelIdVideosVideoIdRoute, putChannelsChannelIdVideosVideoIdRouteHandler)
  .openapi(
    getChannelsChannelIdVideosVideoIdCommentsRoute,
    getChannelsChannelIdVideosVideoIdCommentsRouteHandler,
  )
  .openapi(
    postChannelsChannelIdVideosVideoIdCommentsRoute,
    postChannelsChannelIdVideosVideoIdCommentsRouteHandler,
  )
  .openapi(
    getChannelsChannelIdVideosVideoIdCreditsRoute,
    getChannelsChannelIdVideosVideoIdCreditsRouteHandler,
  )
  .openapi(
    postChannelsChannelIdVideosVideoIdCreditsRoute,
    postChannelsChannelIdVideosVideoIdCreditsRouteHandler,
  )
  .openapi(
    getChannelsChannelIdVideosVideoIdLikesRoute,
    getChannelsChannelIdVideosVideoIdLikesRouteHandler,
  )
  .openapi(
    getChannelsChannelIdVideosVideoIdPicturesRoute,
    getChannelsChannelIdVideosVideoIdPicturesRouteHandler,
  )
  .openapi(
    postChannelsChannelIdVideosVideoIdPicturesRoute,
    postChannelsChannelIdVideosVideoIdPicturesRouteHandler,
  )
  .openapi(
    getChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
    getChannelsChannelIdVideosVideoIdPrivacyUsersRouteHandler,
  )
  .openapi(
    putChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
    putChannelsChannelIdVideosVideoIdPrivacyUsersRouteHandler,
  )
  .openapi(
    getChannelsChannelIdVideosVideoIdTexttracksRoute,
    getChannelsChannelIdVideosVideoIdTexttracksRouteHandler,
  )
  .openapi(
    postChannelsChannelIdVideosVideoIdTexttracksRoute,
    postChannelsChannelIdVideosVideoIdTexttracksRouteHandler,
  )
  .openapi(getContentratingsRoute, getContentratingsRouteHandler)
  .openapi(getCreativecommonsRoute, getCreativecommonsRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdUsersRoute, getGroupsGroupIdUsersRouteHandler)
  .openapi(getGroupsGroupIdVideosRoute, getGroupsGroupIdVideosRouteHandler)
  .openapi(deleteGroupsGroupIdVideosVideoIdRoute, deleteGroupsGroupIdVideosVideoIdRouteHandler)
  .openapi(getGroupsGroupIdVideosVideoIdRoute, getGroupsGroupIdVideosVideoIdRouteHandler)
  .openapi(putGroupsGroupIdVideosVideoIdRoute, putGroupsGroupIdVideosVideoIdRouteHandler)
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(patchMeRoute, patchMeRouteHandler)
  .openapi(getMeAlbumsRoute, getMeAlbumsRouteHandler)
  .openapi(postMeAlbumsRoute, postMeAlbumsRouteHandler)
  .openapi(deleteMeAlbumsAlbumIdRoute, deleteMeAlbumsAlbumIdRouteHandler)
  .openapi(getMeAlbumsAlbumIdRoute, getMeAlbumsAlbumIdRouteHandler)
  .openapi(patchMeAlbumsAlbumIdRoute, patchMeAlbumsAlbumIdRouteHandler)
  .openapi(getMeAlbumsAlbumIdVideosRoute, getMeAlbumsAlbumIdVideosRouteHandler)
  .openapi(putMeAlbumsAlbumIdVideosRoute, putMeAlbumsAlbumIdVideosRouteHandler)
  .openapi(deleteMeAlbumsAlbumIdVideosVideoIdRoute, deleteMeAlbumsAlbumIdVideosVideoIdRouteHandler)
  .openapi(getMeAlbumsAlbumIdVideosVideoIdRoute, getMeAlbumsAlbumIdVideosVideoIdRouteHandler)
  .openapi(putMeAlbumsAlbumIdVideosVideoIdRoute, putMeAlbumsAlbumIdVideosVideoIdRouteHandler)
  .openapi(
    postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
    postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRouteHandler,
  )
  .openapi(getMeAppearancesRoute, getMeAppearancesRouteHandler)
  .openapi(getMeCategoriesRoute, getMeCategoriesRouteHandler)
  .openapi(deleteMeCategoriesCategoryRoute, deleteMeCategoriesCategoryRouteHandler)
  .openapi(getMeCategoriesCategoryRoute, getMeCategoriesCategoryRouteHandler)
  .openapi(putMeCategoriesCategoryRoute, putMeCategoriesCategoryRouteHandler)
  .openapi(getMeChannelsRoute, getMeChannelsRouteHandler)
  .openapi(deleteMeChannelsChannelIdRoute, deleteMeChannelsChannelIdRouteHandler)
  .openapi(getMeChannelsChannelIdRoute, getMeChannelsChannelIdRouteHandler)
  .openapi(putMeChannelsChannelIdRoute, putMeChannelsChannelIdRouteHandler)
  .openapi(getMeCustomlogosRoute, getMeCustomlogosRouteHandler)
  .openapi(postMeCustomlogosRoute, postMeCustomlogosRouteHandler)
  .openapi(getMeCustomlogosLogoIdRoute, getMeCustomlogosLogoIdRouteHandler)
  .openapi(getMeFeedRoute, getMeFeedRouteHandler)
  .openapi(getMeFollowersRoute, getMeFollowersRouteHandler)
  .openapi(getMeFollowingRoute, getMeFollowingRouteHandler)
  .openapi(postMeFollowingRoute, postMeFollowingRouteHandler)
  .openapi(deleteMeFollowingFollowUserIdRoute, deleteMeFollowingFollowUserIdRouteHandler)
  .openapi(getMeFollowingFollowUserIdRoute, getMeFollowingFollowUserIdRouteHandler)
  .openapi(putMeFollowingFollowUserIdRoute, putMeFollowingFollowUserIdRouteHandler)
  .openapi(getMeGroupsRoute, getMeGroupsRouteHandler)
  .openapi(deleteMeGroupsGroupIdRoute, deleteMeGroupsGroupIdRouteHandler)
  .openapi(putMeGroupsGroupIdRoute, putMeGroupsGroupIdRouteHandler)
  .openapi(getMeGroupsGroupIdRoute, getMeGroupsGroupIdRouteHandler)
  .openapi(getMeLikesRoute, getMeLikesRouteHandler)
  .openapi(deleteMeLikesVideoIdRoute, deleteMeLikesVideoIdRouteHandler)
  .openapi(getMeLikesVideoIdRoute, getMeLikesVideoIdRouteHandler)
  .openapi(putMeLikesVideoIdRoute, putMeLikesVideoIdRouteHandler)
  .openapi(getMeOndemandPagesRoute, getMeOndemandPagesRouteHandler)
  .openapi(postMeOndemandPagesRoute, postMeOndemandPagesRouteHandler)
  .openapi(getMeOndemandPurchasesRoute, getMeOndemandPurchasesRouteHandler)
  .openapi(getMeOndemandPurchasesOndemandIdRoute, getMeOndemandPurchasesOndemandIdRouteHandler)
  .openapi(getMePicturesRoute, getMePicturesRouteHandler)
  .openapi(postMePicturesRoute, postMePicturesRouteHandler)
  .openapi(deleteMePicturesPortraitsetIdRoute, deleteMePicturesPortraitsetIdRouteHandler)
  .openapi(getMePicturesPortraitsetIdRoute, getMePicturesPortraitsetIdRouteHandler)
  .openapi(patchMePicturesPortraitsetIdRoute, patchMePicturesPortraitsetIdRouteHandler)
  .openapi(getMePortfoliosRoute, getMePortfoliosRouteHandler)
  .openapi(getMePortfoliosPortfolioIdRoute, getMePortfoliosPortfolioIdRouteHandler)
  .openapi(getMePortfoliosPortfolioIdVideosRoute, getMePortfoliosPortfolioIdVideosRouteHandler)
  .openapi(
    deleteMePortfoliosPortfolioIdVideosVideoIdRoute,
    deleteMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(
    getMePortfoliosPortfolioIdVideosVideoIdRoute,
    getMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putMePortfoliosPortfolioIdVideosVideoIdRoute,
    putMePortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(getMePresetsRoute, getMePresetsRouteHandler)
  .openapi(getMePresetsPresetIdRoute, getMePresetsPresetIdRouteHandler)
  .openapi(patchMePresetsPresetIdRoute, patchMePresetsPresetIdRouteHandler)
  .openapi(getMePresetsPresetIdVideosRoute, getMePresetsPresetIdVideosRouteHandler)
  .openapi(getMeProjectsRoute, getMeProjectsRouteHandler)
  .openapi(postMeProjectsRoute, postMeProjectsRouteHandler)
  .openapi(deleteMeProjectsProjectIdRoute, deleteMeProjectsProjectIdRouteHandler)
  .openapi(getMeProjectsProjectIdRoute, getMeProjectsProjectIdRouteHandler)
  .openapi(patchMeProjectsProjectIdRoute, patchMeProjectsProjectIdRouteHandler)
  .openapi(deleteMeProjectsProjectIdVideosRoute, deleteMeProjectsProjectIdVideosRouteHandler)
  .openapi(getMeProjectsProjectIdVideosRoute, getMeProjectsProjectIdVideosRouteHandler)
  .openapi(putMeProjectsProjectIdVideosRoute, putMeProjectsProjectIdVideosRouteHandler)
  .openapi(
    deleteMeProjectsProjectIdVideosVideoIdRoute,
    deleteMeProjectsProjectIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putMeProjectsProjectIdVideosVideoIdRoute,
    putMeProjectsProjectIdVideosVideoIdRouteHandler,
  )
  .openapi(getMeVideosRoute, getMeVideosRouteHandler)
  .openapi(postMeVideosRoute, postMeVideosRouteHandler)
  .openapi(getMeVideosVideoIdRoute, getMeVideosVideoIdRouteHandler)
  .openapi(deleteMeWatchedVideosRoute, deleteMeWatchedVideosRouteHandler)
  .openapi(getMeWatchedVideosRoute, getMeWatchedVideosRouteHandler)
  .openapi(deleteMeWatchedVideosVideoIdRoute, deleteMeWatchedVideosVideoIdRouteHandler)
  .openapi(getMeWatchlaterRoute, getMeWatchlaterRouteHandler)
  .openapi(deleteMeWatchlaterVideoIdRoute, deleteMeWatchlaterVideoIdRouteHandler)
  .openapi(getMeWatchlaterVideoIdRoute, getMeWatchlaterVideoIdRouteHandler)
  .openapi(putMeWatchlaterVideoIdRoute, putMeWatchlaterVideoIdRouteHandler)
  .openapi(postOauthAccessTokenRoute, postOauthAccessTokenRouteHandler)
  .openapi(postOauthAuthorizeClientRoute, postOauthAuthorizeClientRouteHandler)
  .openapi(postOauthAuthorizeVimeoOauth1Route, postOauthAuthorizeVimeoOauth1RouteHandler)
  .openapi(getOauthVerifyRoute, getOauthVerifyRouteHandler)
  .openapi(getOndemandGenresRoute, getOndemandGenresRouteHandler)
  .openapi(getOndemandGenresGenreIdRoute, getOndemandGenresGenreIdRouteHandler)
  .openapi(getOndemandGenresGenreIdPagesRoute, getOndemandGenresGenreIdPagesRouteHandler)
  .openapi(
    getOndemandGenresGenreIdPagesOndemandIdRoute,
    getOndemandGenresGenreIdPagesOndemandIdRouteHandler,
  )
  .openapi(deleteOndemandPagesOndemandIdRoute, deleteOndemandPagesOndemandIdRouteHandler)
  .openapi(getOndemandPagesOndemandIdRoute, getOndemandPagesOndemandIdRouteHandler)
  .openapi(patchOndemandPagesOndemandIdRoute, patchOndemandPagesOndemandIdRouteHandler)
  .openapi(
    getOndemandPagesOndemandIdBackgroundsRoute,
    getOndemandPagesOndemandIdBackgroundsRouteHandler,
  )
  .openapi(
    postOndemandPagesOndemandIdBackgroundsRoute,
    postOndemandPagesOndemandIdBackgroundsRouteHandler,
  )
  .openapi(
    deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
    deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
    getOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  )
  .openapi(
    patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
    patchOndemandPagesOndemandIdBackgroundsBackgroundIdRouteHandler,
  )
  .openapi(getOndemandPagesOndemandIdGenresRoute, getOndemandPagesOndemandIdGenresRouteHandler)
  .openapi(
    deleteOndemandPagesOndemandIdGenresGenreIdRoute,
    deleteOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdGenresGenreIdRoute,
    getOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  )
  .openapi(
    putOndemandPagesOndemandIdGenresGenreIdRoute,
    putOndemandPagesOndemandIdGenresGenreIdRouteHandler,
  )
  .openapi(getOndemandPagesOndemandIdLikesRoute, getOndemandPagesOndemandIdLikesRouteHandler)
  .openapi(getOndemandPagesOndemandIdPicturesRoute, getOndemandPagesOndemandIdPicturesRouteHandler)
  .openapi(
    postOndemandPagesOndemandIdPicturesRoute,
    postOndemandPagesOndemandIdPicturesRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdPicturesPosterIdRoute,
    getOndemandPagesOndemandIdPicturesPosterIdRouteHandler,
  )
  .openapi(
    patchOndemandPagesOndemandIdPicturesPosterIdRoute,
    patchOndemandPagesOndemandIdPicturesPosterIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdPromotionsRoute,
    getOndemandPagesOndemandIdPromotionsRouteHandler,
  )
  .openapi(
    postOndemandPagesOndemandIdPromotionsRoute,
    postOndemandPagesOndemandIdPromotionsRouteHandler,
  )
  .openapi(
    deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute,
    deleteOndemandPagesOndemandIdPromotionsPromotionIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdPromotionsPromotionIdRoute,
    getOndemandPagesOndemandIdPromotionsPromotionIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute,
    getOndemandPagesOndemandIdPromotionsPromotionIdCodesRouteHandler,
  )
  .openapi(
    deleteOndemandPagesOndemandIdRegionsRoute,
    deleteOndemandPagesOndemandIdRegionsRouteHandler,
  )
  .openapi(getOndemandPagesOndemandIdRegionsRoute, getOndemandPagesOndemandIdRegionsRouteHandler)
  .openapi(putOndemandPagesOndemandIdRegionsRoute, putOndemandPagesOndemandIdRegionsRouteHandler)
  .openapi(
    deleteOndemandPagesOndemandIdRegionsCountryRoute,
    deleteOndemandPagesOndemandIdRegionsCountryRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdRegionsCountryRoute,
    getOndemandPagesOndemandIdRegionsCountryRouteHandler,
  )
  .openapi(
    putOndemandPagesOndemandIdRegionsCountryRoute,
    putOndemandPagesOndemandIdRegionsCountryRouteHandler,
  )
  .openapi(getOndemandPagesOndemandIdSeasonsRoute, getOndemandPagesOndemandIdSeasonsRouteHandler)
  .openapi(
    getOndemandPagesOndemandIdSeasonsSeasonIdRoute,
    getOndemandPagesOndemandIdSeasonsSeasonIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute,
    getOndemandPagesOndemandIdSeasonsSeasonIdVideosRouteHandler,
  )
  .openapi(getOndemandPagesOndemandIdVideosRoute, getOndemandPagesOndemandIdVideosRouteHandler)
  .openapi(
    deleteOndemandPagesOndemandIdVideosVideoIdRoute,
    deleteOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  )
  .openapi(
    getOndemandPagesOndemandIdVideosVideoIdRoute,
    getOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putOndemandPagesOndemandIdVideosVideoIdRoute,
    putOndemandPagesOndemandIdVideosVideoIdRouteHandler,
  )
  .openapi(getOndemandRegionsRoute, getOndemandRegionsRouteHandler)
  .openapi(getOndemandRegionsCountryRoute, getOndemandRegionsCountryRouteHandler)
  .openapi(getTagsWordRoute, getTagsWordRouteHandler)
  .openapi(getTagsWordVideosRoute, getTagsWordVideosRouteHandler)
  .openapi(deleteTokensRoute, deleteTokensRouteHandler)
  .openapi(getTutorialRoute, getTutorialRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(getUsersUserIdAlbumsRoute, getUsersUserIdAlbumsRouteHandler)
  .openapi(postUsersUserIdAlbumsRoute, postUsersUserIdAlbumsRouteHandler)
  .openapi(deleteUsersUserIdAlbumsAlbumIdRoute, deleteUsersUserIdAlbumsAlbumIdRouteHandler)
  .openapi(getUsersUserIdAlbumsAlbumIdRoute, getUsersUserIdAlbumsAlbumIdRouteHandler)
  .openapi(patchUsersUserIdAlbumsAlbumIdRoute, patchUsersUserIdAlbumsAlbumIdRouteHandler)
  .openapi(
    getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
    getUsersUserIdAlbumsAlbumIdCustomThumbnailsRouteHandler,
  )
  .openapi(
    postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
    postUsersUserIdAlbumsAlbumIdCustomThumbnailsRouteHandler,
  )
  .openapi(
    deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
    deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
    getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
    patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(getUsersUserIdAlbumsAlbumIdLogosRoute, getUsersUserIdAlbumsAlbumIdLogosRouteHandler)
  .openapi(postUsersUserIdAlbumsAlbumIdLogosRoute, postUsersUserIdAlbumsAlbumIdLogosRouteHandler)
  .openapi(
    deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
    deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  )
  .openapi(
    getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
    getUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  )
  .openapi(
    patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
    patchUsersUserIdAlbumsAlbumIdLogosLogoIdRouteHandler,
  )
  .openapi(getUsersUserIdAlbumsAlbumIdVideosRoute, getUsersUserIdAlbumsAlbumIdVideosRouteHandler)
  .openapi(putUsersUserIdAlbumsAlbumIdVideosRoute, putUsersUserIdAlbumsAlbumIdVideosRouteHandler)
  .openapi(
    deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
    deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  )
  .openapi(
    getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
    getUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
    putUsersUserIdAlbumsAlbumIdVideosVideoIdRouteHandler,
  )
  .openapi(
    postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
    postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRouteHandler,
  )
  .openapi(getUsersUserIdAppearancesRoute, getUsersUserIdAppearancesRouteHandler)
  .openapi(getUsersUserIdCategoriesRoute, getUsersUserIdCategoriesRouteHandler)
  .openapi(
    deleteUsersUserIdCategoriesCategoryRoute,
    deleteUsersUserIdCategoriesCategoryRouteHandler,
  )
  .openapi(getUsersUserIdCategoriesCategoryRoute, getUsersUserIdCategoriesCategoryRouteHandler)
  .openapi(putUsersUserIdCategoriesCategoryRoute, putUsersUserIdCategoriesCategoryRouteHandler)
  .openapi(getUsersUserIdChannelsRoute, getUsersUserIdChannelsRouteHandler)
  .openapi(deleteUsersUserIdChannelsChannelIdRoute, deleteUsersUserIdChannelsChannelIdRouteHandler)
  .openapi(getUsersUserIdChannelsChannelIdRoute, getUsersUserIdChannelsChannelIdRouteHandler)
  .openapi(putUsersUserIdChannelsChannelIdRoute, putUsersUserIdChannelsChannelIdRouteHandler)
  .openapi(getUsersUserIdCustomlogosRoute, getUsersUserIdCustomlogosRouteHandler)
  .openapi(postUsersUserIdCustomlogosRoute, postUsersUserIdCustomlogosRouteHandler)
  .openapi(getUsersUserIdCustomlogosLogoIdRoute, getUsersUserIdCustomlogosLogoIdRouteHandler)
  .openapi(getUsersUserIdFeedRoute, getUsersUserIdFeedRouteHandler)
  .openapi(getUsersUserIdFollowersRoute, getUsersUserIdFollowersRouteHandler)
  .openapi(getUsersUserIdFollowingRoute, getUsersUserIdFollowingRouteHandler)
  .openapi(postUsersUserIdFollowingRoute, postUsersUserIdFollowingRouteHandler)
  .openapi(
    deleteUsersUserIdFollowingFollowUserIdRoute,
    deleteUsersUserIdFollowingFollowUserIdRouteHandler,
  )
  .openapi(
    getUsersUserIdFollowingFollowUserIdRoute,
    getUsersUserIdFollowingFollowUserIdRouteHandler,
  )
  .openapi(
    putUsersUserIdFollowingFollowUserIdRoute,
    putUsersUserIdFollowingFollowUserIdRouteHandler,
  )
  .openapi(getUsersUserIdGroupsRoute, getUsersUserIdGroupsRouteHandler)
  .openapi(deleteUsersUserIdGroupsGroupIdRoute, deleteUsersUserIdGroupsGroupIdRouteHandler)
  .openapi(putUsersUserIdGroupsGroupIdRoute, putUsersUserIdGroupsGroupIdRouteHandler)
  .openapi(getUsersUserIdGroupsGroupIdRoute, getUsersUserIdGroupsGroupIdRouteHandler)
  .openapi(getUsersUserIdLikesRoute, getUsersUserIdLikesRouteHandler)
  .openapi(deleteUsersUserIdLikesVideoIdRoute, deleteUsersUserIdLikesVideoIdRouteHandler)
  .openapi(getUsersUserIdLikesVideoIdRoute, getUsersUserIdLikesVideoIdRouteHandler)
  .openapi(putUsersUserIdLikesVideoIdRoute, putUsersUserIdLikesVideoIdRouteHandler)
  .openapi(getUsersUserIdOndemandPagesRoute, getUsersUserIdOndemandPagesRouteHandler)
  .openapi(postUsersUserIdOndemandPagesRoute, postUsersUserIdOndemandPagesRouteHandler)
  .openapi(getUsersUserIdOndemandPurchasesRoute, getUsersUserIdOndemandPurchasesRouteHandler)
  .openapi(getUsersUserIdPicturesRoute, getUsersUserIdPicturesRouteHandler)
  .openapi(postUsersUserIdPicturesRoute, postUsersUserIdPicturesRouteHandler)
  .openapi(
    deleteUsersUserIdPicturesPortraitsetIdRoute,
    deleteUsersUserIdPicturesPortraitsetIdRouteHandler,
  )
  .openapi(
    getUsersUserIdPicturesPortraitsetIdRoute,
    getUsersUserIdPicturesPortraitsetIdRouteHandler,
  )
  .openapi(
    patchUsersUserIdPicturesPortraitsetIdRoute,
    patchUsersUserIdPicturesPortraitsetIdRouteHandler,
  )
  .openapi(getUsersUserIdPortfoliosRoute, getUsersUserIdPortfoliosRouteHandler)
  .openapi(
    getUsersUserIdPortfoliosPortfolioIdRoute,
    getUsersUserIdPortfoliosPortfolioIdRouteHandler,
  )
  .openapi(
    getUsersUserIdPortfoliosPortfolioIdVideosRoute,
    getUsersUserIdPortfoliosPortfolioIdVideosRouteHandler,
  )
  .openapi(
    deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
    deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(
    getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
    getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
    putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRouteHandler,
  )
  .openapi(getUsersUserIdPresetsRoute, getUsersUserIdPresetsRouteHandler)
  .openapi(getUsersUserIdPresetsPresetIdRoute, getUsersUserIdPresetsPresetIdRouteHandler)
  .openapi(patchUsersUserIdPresetsPresetIdRoute, patchUsersUserIdPresetsPresetIdRouteHandler)
  .openapi(
    getUsersUserIdPresetsPresetIdVideosRoute,
    getUsersUserIdPresetsPresetIdVideosRouteHandler,
  )
  .openapi(getUsersUserIdProjectsRoute, getUsersUserIdProjectsRouteHandler)
  .openapi(postUsersUserIdProjectsRoute, postUsersUserIdProjectsRouteHandler)
  .openapi(deleteUsersUserIdProjectsProjectIdRoute, deleteUsersUserIdProjectsProjectIdRouteHandler)
  .openapi(getUsersUserIdProjectsProjectIdRoute, getUsersUserIdProjectsProjectIdRouteHandler)
  .openapi(patchUsersUserIdProjectsProjectIdRoute, patchUsersUserIdProjectsProjectIdRouteHandler)
  .openapi(
    deleteUsersUserIdProjectsProjectIdVideosRoute,
    deleteUsersUserIdProjectsProjectIdVideosRouteHandler,
  )
  .openapi(
    getUsersUserIdProjectsProjectIdVideosRoute,
    getUsersUserIdProjectsProjectIdVideosRouteHandler,
  )
  .openapi(
    putUsersUserIdProjectsProjectIdVideosRoute,
    putUsersUserIdProjectsProjectIdVideosRouteHandler,
  )
  .openapi(
    deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute,
    deleteUsersUserIdProjectsProjectIdVideosVideoIdRouteHandler,
  )
  .openapi(
    putUsersUserIdProjectsProjectIdVideosVideoIdRoute,
    putUsersUserIdProjectsProjectIdVideosVideoIdRouteHandler,
  )
  .openapi(deleteUsersUserIdUploadsUploadIdRoute, deleteUsersUserIdUploadsUploadIdRouteHandler)
  .openapi(getUsersUserIdUploadsUploadIdRoute, getUsersUserIdUploadsUploadIdRouteHandler)
  .openapi(getUsersUserIdVideosRoute, getUsersUserIdVideosRouteHandler)
  .openapi(postUsersUserIdVideosRoute, postUsersUserIdVideosRouteHandler)
  .openapi(getUsersUserIdVideosVideoIdRoute, getUsersUserIdVideosVideoIdRouteHandler)
  .openapi(getUsersUserIdWatchlaterRoute, getUsersUserIdWatchlaterRouteHandler)
  .openapi(deleteUsersUserIdWatchlaterVideoIdRoute, deleteUsersUserIdWatchlaterVideoIdRouteHandler)
  .openapi(getUsersUserIdWatchlaterVideoIdRoute, getUsersUserIdWatchlaterVideoIdRouteHandler)
  .openapi(putUsersUserIdWatchlaterVideoIdRoute, putUsersUserIdWatchlaterVideoIdRouteHandler)
  .openapi(getVideosRoute, getVideosRouteHandler)
  .openapi(deleteVideosVideoIdRoute, deleteVideosVideoIdRouteHandler)
  .openapi(getVideosVideoIdRoute, getVideosVideoIdRouteHandler)
  .openapi(patchVideosVideoIdRoute, patchVideosVideoIdRouteHandler)
  .openapi(getVideosVideoIdAvailableAlbumsRoute, getVideosVideoIdAvailableAlbumsRouteHandler)
  .openapi(getVideosVideoIdAvailableChannelsRoute, getVideosVideoIdAvailableChannelsRouteHandler)
  .openapi(getVideosVideoIdCategoriesRoute, getVideosVideoIdCategoriesRouteHandler)
  .openapi(putVideosVideoIdCategoriesRoute, putVideosVideoIdCategoriesRouteHandler)
  .openapi(getVideosVideoIdCommentsRoute, getVideosVideoIdCommentsRouteHandler)
  .openapi(postVideosVideoIdCommentsRoute, postVideosVideoIdCommentsRouteHandler)
  .openapi(
    deleteVideosVideoIdCommentsCommentIdRoute,
    deleteVideosVideoIdCommentsCommentIdRouteHandler,
  )
  .openapi(getVideosVideoIdCommentsCommentIdRoute, getVideosVideoIdCommentsCommentIdRouteHandler)
  .openapi(
    patchVideosVideoIdCommentsCommentIdRoute,
    patchVideosVideoIdCommentsCommentIdRouteHandler,
  )
  .openapi(
    getVideosVideoIdCommentsCommentIdRepliesRoute,
    getVideosVideoIdCommentsCommentIdRepliesRouteHandler,
  )
  .openapi(
    postVideosVideoIdCommentsCommentIdRepliesRoute,
    postVideosVideoIdCommentsCommentIdRepliesRouteHandler,
  )
  .openapi(getVideosVideoIdCreditsRoute, getVideosVideoIdCreditsRouteHandler)
  .openapi(postVideosVideoIdCreditsRoute, postVideosVideoIdCreditsRouteHandler)
  .openapi(deleteVideosVideoIdCreditsCreditIdRoute, deleteVideosVideoIdCreditsCreditIdRouteHandler)
  .openapi(getVideosVideoIdCreditsCreditIdRoute, getVideosVideoIdCreditsCreditIdRouteHandler)
  .openapi(patchVideosVideoIdCreditsCreditIdRoute, patchVideosVideoIdCreditsCreditIdRouteHandler)
  .openapi(getVideosVideoIdLikesRoute, getVideosVideoIdLikesRouteHandler)
  .openapi(getVideosVideoIdPicturesRoute, getVideosVideoIdPicturesRouteHandler)
  .openapi(postVideosVideoIdPicturesRoute, postVideosVideoIdPicturesRouteHandler)
  .openapi(
    deleteVideosVideoIdPicturesPictureIdRoute,
    deleteVideosVideoIdPicturesPictureIdRouteHandler,
  )
  .openapi(getVideosVideoIdPicturesPictureIdRoute, getVideosVideoIdPicturesPictureIdRouteHandler)
  .openapi(
    patchVideosVideoIdPicturesPictureIdRoute,
    patchVideosVideoIdPicturesPictureIdRouteHandler,
  )
  .openapi(deleteVideosVideoIdPresetsPresetIdRoute, deleteVideosVideoIdPresetsPresetIdRouteHandler)
  .openapi(getVideosVideoIdPresetsPresetIdRoute, getVideosVideoIdPresetsPresetIdRouteHandler)
  .openapi(putVideosVideoIdPresetsPresetIdRoute, putVideosVideoIdPresetsPresetIdRouteHandler)
  .openapi(getVideosVideoIdPrivacyDomainsRoute, getVideosVideoIdPrivacyDomainsRouteHandler)
  .openapi(
    deleteVideosVideoIdPrivacyDomainsDomainRoute,
    deleteVideosVideoIdPrivacyDomainsDomainRouteHandler,
  )
  .openapi(
    putVideosVideoIdPrivacyDomainsDomainRoute,
    putVideosVideoIdPrivacyDomainsDomainRouteHandler,
  )
  .openapi(getVideosVideoIdPrivacyUsersRoute, getVideosVideoIdPrivacyUsersRouteHandler)
  .openapi(putVideosVideoIdPrivacyUsersRoute, putVideosVideoIdPrivacyUsersRouteHandler)
  .openapi(
    deleteVideosVideoIdPrivacyUsersUserIdRoute,
    deleteVideosVideoIdPrivacyUsersUserIdRouteHandler,
  )
  .openapi(putVideosVideoIdPrivacyUsersUserIdRoute, putVideosVideoIdPrivacyUsersUserIdRouteHandler)
  .openapi(getVideosVideoIdTagsRoute, getVideosVideoIdTagsRouteHandler)
  .openapi(putVideosVideoIdTagsRoute, putVideosVideoIdTagsRouteHandler)
  .openapi(deleteVideosVideoIdTagsWordRoute, deleteVideosVideoIdTagsWordRouteHandler)
  .openapi(getVideosVideoIdTagsWordRoute, getVideosVideoIdTagsWordRouteHandler)
  .openapi(putVideosVideoIdTagsWordRoute, putVideosVideoIdTagsWordRouteHandler)
  .openapi(getVideosVideoIdTexttracksRoute, getVideosVideoIdTexttracksRouteHandler)
  .openapi(postVideosVideoIdTexttracksRoute, postVideosVideoIdTexttracksRouteHandler)
  .openapi(
    deleteVideosVideoIdTexttracksTexttrackIdRoute,
    deleteVideosVideoIdTexttracksTexttrackIdRouteHandler,
  )
  .openapi(
    getVideosVideoIdTexttracksTexttrackIdRoute,
    getVideosVideoIdTexttracksTexttrackIdRouteHandler,
  )
  .openapi(
    patchVideosVideoIdTexttracksTexttrackIdRoute,
    patchVideosVideoIdTexttracksTexttrackIdRouteHandler,
  )
  .openapi(
    postVideosVideoIdTimelinethumbnailsRoute,
    postVideosVideoIdTimelinethumbnailsRouteHandler,
  )
  .openapi(
    getVideosVideoIdTimelinethumbnailsThumbnailIdRoute,
    getVideosVideoIdTimelinethumbnailsThumbnailIdRouteHandler,
  )
  .openapi(postVideosVideoIdVersionsRoute, postVideosVideoIdVersionsRouteHandler)
  .openapi(getVideosVideoIdVideosRoute, getVideosVideoIdVideosRouteHandler)

export default app
