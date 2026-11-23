import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemsItemIdImagesImageTypeImageIndexRoute,
  deleteItemsItemIdImagesImageTypeRoute,
  deleteItemsItemIdRoute,
  deleteItemsRoute,
  getItemsCountsRoute,
  getItemsFilters2Route,
  getItemsFiltersRoute,
  getItemsItemIdAncestorsRoute,
  getItemsItemIdCollectionsRoute,
  getItemsItemIdDownloadRoute,
  getItemsItemIdExternalIdInfosRoute,
  getItemsItemIdFileRoute,
  getItemsItemIdImagesImageTypeImageIndexRoute,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  getItemsItemIdImagesImageTypeRoute,
  getItemsItemIdImagesRoute,
  getItemsItemIdInstantMixRoute,
  getItemsItemIdIntrosRoute,
  getItemsItemIdLocalTrailersRoute,
  getItemsItemIdMetadataEditorRoute,
  getItemsItemIdPlaybackInfoRoute,
  getItemsItemIdRemoteImagesProvidersRoute,
  getItemsItemIdRemoteImagesRoute,
  getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
  getItemsItemIdRoute,
  getItemsItemIdSimilarRoute,
  getItemsItemIdSpecialFeaturesRoute,
  getItemsItemIdThemeMediaRoute,
  getItemsItemIdThemeSongsRoute,
  getItemsItemIdThemeVideosRoute,
  getItemsLatestRoute,
  getItemsRootRoute,
  getItemsRoute,
  getItemsSuggestionsRoute,
  headItemsItemIdImagesImageTypeImageIndexRoute,
  headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  headItemsItemIdImagesImageTypeRoute,
  postItemsItemIdContentTypeRoute,
  postItemsItemIdImagesImageTypeImageIndexIndexRoute,
  postItemsItemIdImagesImageTypeImageIndexRoute,
  postItemsItemIdImagesImageTypeRoute,
  postItemsItemIdPlaybackInfoRoute,
  postItemsItemIdRefreshRoute,
  postItemsItemIdRemoteImagesDownloadRoute,
  postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute,
  postItemsItemIdRoute,
  postItemsRemoteSearchApplyItemIdRoute,
  postItemsRemoteSearchBookRoute,
  postItemsRemoteSearchBoxSetRoute,
  postItemsRemoteSearchMovieRoute,
  postItemsRemoteSearchMusicAlbumRoute,
  postItemsRemoteSearchMusicArtistRoute,
  postItemsRemoteSearchMusicVideoRoute,
  postItemsRemoteSearchPersonRoute,
  postItemsRemoteSearchSeriesRoute,
  postItemsRemoteSearchTrailerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsFilters2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postItemsItemIdImagesImageTypeImageIndexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdExternalIdInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchApplyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchBoxSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicAlbumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicArtistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchMusicVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRemoteSearchTrailerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdMetadataEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdAncestorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdThemeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdPlaybackInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdPlaybackInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRemoteImagesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteImagesProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteSearchSubtitlesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdIntrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdLocalTrailersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdSpecialFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsRootRoute, (c) => {
    throw new Error('Not implemented')
  })
