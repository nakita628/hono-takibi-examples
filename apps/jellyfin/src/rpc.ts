import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSystemActivityLogEntries(
  args: InferRequestType<typeof client.System.ActivityLog.Entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.ActivityLog.Entries.$get(args, options))
}

export async function getAuthKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.Auth.Keys.$get(undefined, options))
}

export async function postAuthKeys(
  args: InferRequestType<typeof client.Auth.Keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Auth.Keys.$post(args, options))
}

export async function deleteAuthKeysKey(
  args: InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Auth.Keys[':key'].$delete(args, options))
}

export async function getArtists(
  args: InferRequestType<typeof client.Artists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Artists.$get(args, options))
}

export async function getArtistsName(
  args: InferRequestType<(typeof client.Artists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Artists[':name'].$get(args, options))
}

export async function getArtistsAlbumArtists(
  args: InferRequestType<typeof client.Artists.AlbumArtists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Artists.AlbumArtists.$get(args, options))
}

export async function getAudioItemIdStream(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].stream.$get(args, options))
}

export async function headAudioItemIdStream(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].stream.$head(args, options))
}

export async function getAudioItemIdStreamContainer(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId']['stream.:container'].$get(args, options))
}

export async function headAudioItemIdStreamContainer(
  args: InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId']['stream.:container'].$head(args, options))
}

export async function getBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.Backup.$get(undefined, options))
}

export async function postBackupCreate(
  args: InferRequestType<typeof client.Backup.Create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Backup.Create.$post(args, options))
}

export async function getBackupManifest(
  args: InferRequestType<typeof client.Backup.Manifest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Backup.Manifest.$get(args, options))
}

export async function postBackupRestore(
  args: InferRequestType<typeof client.Backup.Restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Backup.Restore.$post(args, options))
}

export async function getBrandingConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.Branding.Configuration.$get(undefined, options))
}

export async function getBrandingCss(options?: ClientRequestOptions) {
  return await parseResponse(client.Branding.Css.$get(undefined, options))
}

export async function getBrandingCssCss(options?: ClientRequestOptions) {
  return await parseResponse(client.Branding['Css.css'].$get(undefined, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.Channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Channels.$get(args, options))
}

export async function getChannelsChannelIdFeatures(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Channels[':channelId'].Features.$get(args, options))
}

export async function getChannelsChannelIdItems(
  args: InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Channels[':channelId'].Items.$get(args, options))
}

export async function getChannelsFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.Channels.Features.$get(undefined, options))
}

export async function getChannelsItemsLatest(
  args: InferRequestType<typeof client.Channels.Items.Latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Channels.Items.Latest.$get(args, options))
}

export async function postClientLogDocument(
  args: InferRequestType<typeof client.ClientLog.Document.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ClientLog.Document.$post(args, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.Collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Collections.$post(args, options))
}

export async function postCollectionsCollectionIdItems(
  args: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Collections[':collectionId'].Items.$post(args, options))
}

export async function deleteCollectionsCollectionIdItems(
  args: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Collections[':collectionId'].Items.$delete(args, options))
}

export async function getSystemConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Configuration.$get(undefined, options))
}

export async function postSystemConfiguration(
  args: InferRequestType<typeof client.System.Configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.Configuration.$post(args, options))
}

export async function getSystemConfigurationKey(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.Configuration[':key'].$get(args, options))
}

export async function postSystemConfigurationKey(
  args: InferRequestType<(typeof client.System.Configuration)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.Configuration[':key'].$post(args, options))
}

export async function postSystemConfigurationBranding(
  args: InferRequestType<typeof client.System.Configuration.Branding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.Configuration.Branding.$post(args, options))
}

export async function getSystemConfigurationMetadataOptionsDefault(options?: ClientRequestOptions) {
  return await parseResponse(
    client.System.Configuration.MetadataOptions.Default.$get(undefined, options),
  )
}

export async function getWebConfigurationPage(
  args: InferRequestType<typeof client.web.ConfigurationPage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web.ConfigurationPage.$get(args, options))
}

export async function getWebConfigurationPages(
  args: InferRequestType<typeof client.web.ConfigurationPages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web.ConfigurationPages.$get(args, options))
}

export async function getDevices(
  args: InferRequestType<typeof client.Devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Devices.$get(args, options))
}

export async function deleteDevices(
  args: InferRequestType<typeof client.Devices.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Devices.$delete(args, options))
}

export async function getDevicesInfo(
  args: InferRequestType<typeof client.Devices.Info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Devices.Info.$get(args, options))
}

export async function getDevicesOptions(
  args: InferRequestType<typeof client.Devices.Options.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Devices.Options.$get(args, options))
}

export async function postDevicesOptions(
  args: InferRequestType<typeof client.Devices.Options.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Devices.Options.$post(args, options))
}

export async function getDisplayPreferencesDisplayPreferencesId(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DisplayPreferences[':displayPreferencesId'].$get(args, options))
}

export async function postDisplayPreferencesDisplayPreferencesId(
  args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.DisplayPreferences[':displayPreferencesId'].$post(args, options),
  )
}

export async function getEnvironmentDefaultDirectoryBrowser(options?: ClientRequestOptions) {
  return await parseResponse(client.Environment.DefaultDirectoryBrowser.$get(undefined, options))
}

export async function getEnvironmentDirectoryContents(
  args: InferRequestType<typeof client.Environment.DirectoryContents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Environment.DirectoryContents.$get(args, options))
}

export async function getEnvironmentDrives(options?: ClientRequestOptions) {
  return await parseResponse(client.Environment.Drives.$get(undefined, options))
}

export async function getEnvironmentParentPath(
  args: InferRequestType<typeof client.Environment.ParentPath.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Environment.ParentPath.$get(args, options))
}

export async function postEnvironmentValidatePath(
  args: InferRequestType<typeof client.Environment.ValidatePath.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Environment.ValidatePath.$post(args, options))
}

export async function getItemsFilters(
  args: InferRequestType<typeof client.Items.Filters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Filters.$get(args, options))
}

export async function getItemsFilters2(
  args: InferRequestType<typeof client.Items.Filters2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Filters2.$get(args, options))
}

export async function getGenres(
  args: InferRequestType<typeof client.Genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Genres.$get(args, options))
}

export async function getGenresGenreName(
  args: InferRequestType<(typeof client.Genres)[':genreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Genres[':genreName'].$get(args, options))
}

export async function getArtistsNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function headArtistsNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Artists[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getBrandingSplashscreen(
  args: InferRequestType<typeof client.Branding.Splashscreen.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Branding.Splashscreen.$get(args, options))
}

export async function postBrandingSplashscreen(
  args: InferRequestType<typeof client.Branding.Splashscreen.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Branding.Splashscreen.$post(args, options))
}

export async function deleteBrandingSplashscreen(options?: ClientRequestOptions) {
  return await parseResponse(client.Branding.Splashscreen.$delete(undefined, options))
}

export async function getGenresNameImagesImageType(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Genres[':name'].Images[':imageType'].$get(args, options))
}

export async function headGenresNameImagesImageType(
  args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Genres[':name'].Images[':imageType'].$head(args, options))
}

export async function getGenresNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function headGenresNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Genres[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getItemsItemIdImages(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Images.$get(args, options))
}

export async function getItemsItemIdImagesImageType(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Images[':imageType'].$get(args, options))
}

export async function postItemsItemIdImagesImageType(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Images[':imageType'].$post(args, options))
}

export async function deleteItemsItemIdImagesImageType(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Images[':imageType'].$delete(args, options))
}

export async function headItemsItemIdImagesImageType(
  args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Images[':imageType'].$head(args, options))
}

export async function getItemsItemIdImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function postItemsItemIdImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'].$post(args, options),
  )
}

export async function deleteItemsItemIdImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'].$delete(args, options),
  )
}

export async function headItemsItemIdImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][
      ':maxHeight'
    ][':percentPlayed'][':unplayedCount'].$get(args, options),
  )
}

export async function headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][
      ':maxHeight'
    ][':percentPlayed'][':unplayedCount'].$head(args, options),
  )
}

export async function postItemsItemIdImagesImageTypeImageIndexIndex(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].Images[':imageType'][':imageIndex'].Index.$post(args, options),
  )
}

export async function getMusicGenresNameImagesImageType(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MusicGenres[':name'].Images[':imageType'].$get(args, options))
}

export async function headMusicGenresNameImagesImageType(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MusicGenres[':name'].Images[':imageType'].$head(args, options))
}

export async function getMusicGenresNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function headMusicGenresNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getPersonsNameImagesImageType(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Persons[':name'].Images[':imageType'].$get(args, options))
}

export async function headPersonsNameImagesImageType(
  args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Persons[':name'].Images[':imageType'].$head(args, options))
}

export async function getPersonsNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function headPersonsNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Persons[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getStudiosNameImagesImageType(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Studios[':name'].Images[':imageType'].$get(args, options))
}

export async function headStudiosNameImagesImageType(
  args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Studios[':name'].Images[':imageType'].$head(args, options))
}

export async function getStudiosNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(args, options),
  )
}

export async function headStudiosNameImagesImageTypeImageIndex(
  args: InferRequestType<
    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Studios[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
  )
}

export async function getUserImage(
  args: InferRequestType<typeof client.UserImage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserImage.$get(args, options))
}

export async function postUserImage(
  args: InferRequestType<typeof client.UserImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserImage.$post(args, options))
}

export async function deleteUserImage(
  args: InferRequestType<typeof client.UserImage.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserImage.$delete(args, options))
}

export async function headUserImage(
  args: InferRequestType<typeof client.UserImage.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserImage.$head(args, options))
}

export async function getAlbumsItemIdInstantMix(
  args: InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Albums[':itemId'].InstantMix.$get(args, options))
}

export async function getArtistsItemIdInstantMix(
  args: InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Artists[':itemId'].InstantMix.$get(args, options))
}

export async function getItemsItemIdInstantMix(
  args: InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].InstantMix.$get(args, options))
}

export async function getMusicGenresNameInstantMix(
  args: InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MusicGenres[':name'].InstantMix.$get(args, options))
}

export async function getMusicGenresInstantMix(
  args: InferRequestType<typeof client.MusicGenres.InstantMix.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MusicGenres.InstantMix.$get(args, options))
}

export async function getPlaylistsItemIdInstantMix(
  args: InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':itemId'].InstantMix.$get(args, options))
}

export async function getSongsItemIdInstantMix(
  args: InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Songs[':itemId'].InstantMix.$get(args, options))
}

export async function getItemsItemIdExternalIdInfos(
  args: InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].ExternalIdInfos.$get(args, options))
}

export async function postItemsRemoteSearchApplyItemId(
  args: InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Apply[':itemId'].$post(args, options))
}

export async function postItemsRemoteSearchBook(
  args: InferRequestType<typeof client.Items.RemoteSearch.Book.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Book.$post(args, options))
}

export async function postItemsRemoteSearchBoxSet(
  args: InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.BoxSet.$post(args, options))
}

export async function postItemsRemoteSearchMovie(
  args: InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Movie.$post(args, options))
}

export async function postItemsRemoteSearchMusicAlbum(
  args: InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.MusicAlbum.$post(args, options))
}

export async function postItemsRemoteSearchMusicArtist(
  args: InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.MusicArtist.$post(args, options))
}

export async function postItemsRemoteSearchMusicVideo(
  args: InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.MusicVideo.$post(args, options))
}

export async function postItemsRemoteSearchPerson(
  args: InferRequestType<typeof client.Items.RemoteSearch.Person.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Person.$post(args, options))
}

export async function postItemsRemoteSearchSeries(
  args: InferRequestType<typeof client.Items.RemoteSearch.Series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Series.$post(args, options))
}

export async function postItemsRemoteSearchTrailer(
  args: InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.RemoteSearch.Trailer.$post(args, options))
}

export async function postItemsItemIdRefresh(
  args: InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Refresh.$post(args, options))
}

export async function getItems(
  args: InferRequestType<typeof client.Items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.$get(args, options))
}

export async function deleteItems(
  args: InferRequestType<typeof client.Items.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.$delete(args, options))
}

export async function getUserItemsItemIdUserData(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserItems[':itemId'].UserData.$get(args, options))
}

export async function postUserItemsItemIdUserData(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserItems[':itemId'].UserData.$post(args, options))
}

export async function getUserItemsResume(
  args: InferRequestType<typeof client.UserItems.Resume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserItems.Resume.$get(args, options))
}

export async function getItemsItemId(
  args: InferRequestType<(typeof client.Items)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].$get(args, options))
}

export async function postItemsItemId(
  args: InferRequestType<(typeof client.Items)[':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].$post(args, options))
}

export async function deleteItemsItemId(
  args: InferRequestType<(typeof client.Items)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].$delete(args, options))
}

export async function postItemsItemIdContentType(
  args: InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].ContentType.$post(args, options))
}

export async function getItemsItemIdMetadataEditor(
  args: InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].MetadataEditor.$get(args, options))
}

export async function getAlbumsItemIdSimilar(
  args: InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Albums[':itemId'].Similar.$get(args, options))
}

export async function getArtistsItemIdSimilar(
  args: InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Artists[':itemId'].Similar.$get(args, options))
}

export async function getItemsItemIdAncestors(
  args: InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Ancestors.$get(args, options))
}

export async function getItemsItemIdCollections(
  args: InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Collections.$get(args, options))
}

export async function getItemsItemIdDownload(
  args: InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Download.$get(args, options))
}

export async function getItemsItemIdFile(
  args: InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].File.$get(args, options))
}

export async function getItemsItemIdSimilar(
  args: InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Similar.$get(args, options))
}

export async function getItemsItemIdThemeMedia(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].ThemeMedia.$get(args, options))
}

export async function getItemsItemIdThemeSongs(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].ThemeSongs.$get(args, options))
}

export async function getItemsItemIdThemeVideos(
  args: InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].ThemeVideos.$get(args, options))
}

export async function getItemsCounts(
  args: InferRequestType<typeof client.Items.Counts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Counts.$get(args, options))
}

export async function getLibrariesAvailableOptions(
  args: InferRequestType<typeof client.Libraries.AvailableOptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Libraries.AvailableOptions.$get(args, options))
}

export async function postLibraryMediaUpdated(
  args: InferRequestType<typeof client.Library.Media.Updated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.Media.Updated.$post(args, options))
}

export async function getLibraryMediaFolders(
  args: InferRequestType<typeof client.Library.MediaFolders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.MediaFolders.$get(args, options))
}

export async function postLibraryMoviesAdded(
  args: InferRequestType<typeof client.Library.Movies.Added.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.Movies.Added.$post(args, options))
}

export async function postLibraryMoviesUpdated(
  args: InferRequestType<typeof client.Library.Movies.Updated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.Movies.Updated.$post(args, options))
}

export async function getLibraryPhysicalPaths(options?: ClientRequestOptions) {
  return await parseResponse(client.Library.PhysicalPaths.$get(undefined, options))
}

export async function postLibraryRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.Library.Refresh.$post(undefined, options))
}

export async function postLibrarySeriesAdded(
  args: InferRequestType<typeof client.Library.Series.Added.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.Series.Added.$post(args, options))
}

export async function postLibrarySeriesUpdated(
  args: InferRequestType<typeof client.Library.Series.Updated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.Series.Updated.$post(args, options))
}

export async function getMoviesItemIdSimilar(
  args: InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Movies[':itemId'].Similar.$get(args, options))
}

export async function getShowsItemIdSimilar(
  args: InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shows[':itemId'].Similar.$get(args, options))
}

export async function getTrailersItemIdSimilar(
  args: InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Trailers[':itemId'].Similar.$get(args, options))
}

export async function getLibraryVirtualFolders(options?: ClientRequestOptions) {
  return await parseResponse(client.Library.VirtualFolders.$get(undefined, options))
}

export async function postLibraryVirtualFolders(
  args: InferRequestType<typeof client.Library.VirtualFolders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.$post(args, options))
}

export async function deleteLibraryVirtualFolders(
  args: InferRequestType<typeof client.Library.VirtualFolders.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.$delete(args, options))
}

export async function postLibraryVirtualFoldersLibraryOptions(
  args: InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.LibraryOptions.$post(args, options))
}

export async function postLibraryVirtualFoldersName(
  args: InferRequestType<typeof client.Library.VirtualFolders.Name.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.Name.$post(args, options))
}

export async function postLibraryVirtualFoldersPaths(
  args: InferRequestType<typeof client.Library.VirtualFolders.Paths.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.Paths.$post(args, options))
}

export async function deleteLibraryVirtualFoldersPaths(
  args: InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.Paths.$delete(args, options))
}

export async function postLibraryVirtualFoldersPathsUpdate(
  args: InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Library.VirtualFolders.Paths.Update.$post(args, options))
}

export async function getLiveTvChannelMappingOptions(
  args: InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.ChannelMappingOptions.$get(args, options))
}

export async function postLiveTvChannelMappings(
  args: InferRequestType<typeof client.LiveTv.ChannelMappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.ChannelMappings.$post(args, options))
}

export async function getLiveTvChannels(
  args: InferRequestType<typeof client.LiveTv.Channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Channels.$get(args, options))
}

export async function getLiveTvChannelsChannelId(
  args: InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Channels[':channelId'].$get(args, options))
}

export async function getLiveTvGuideInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.LiveTv.GuideInfo.$get(undefined, options))
}

export async function getLiveTvInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.LiveTv.Info.$get(undefined, options))
}

export async function postLiveTvListingProviders(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.ListingProviders.$post(args, options))
}

export async function deleteLiveTvListingProviders(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.ListingProviders.$delete(args, options))
}

export async function getLiveTvListingProvidersDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.LiveTv.ListingProviders.Default.$get(undefined, options))
}

export async function getLiveTvListingProvidersLineups(
  args: InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.ListingProviders.Lineups.$get(args, options))
}

export async function getLiveTvListingProvidersSchedulesDirectCountries(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, options),
  )
}

export async function getLiveTvLiveRecordingsRecordingIdStream(
  args: InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LiveTv.LiveRecordings[':recordingId'].stream.$get(args, options),
  )
}

export async function getLiveTvLiveStreamFilesStreamIdStreamContainer(
  args: InferRequestType<
    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LiveTv.LiveStreamFiles[':streamId']['stream.:container'].$get(args, options),
  )
}

export async function getLiveTvPrograms(
  args: InferRequestType<typeof client.LiveTv.Programs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Programs.$get(args, options))
}

export async function postLiveTvPrograms(
  args: InferRequestType<typeof client.LiveTv.Programs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Programs.$post(args, options))
}

export async function getLiveTvProgramsProgramId(
  args: InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Programs[':programId'].$get(args, options))
}

export async function getLiveTvProgramsRecommended(
  args: InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Programs.Recommended.$get(args, options))
}

export async function getLiveTvRecordings(
  args: InferRequestType<typeof client.LiveTv.Recordings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Recordings.$get(args, options))
}

export async function getLiveTvRecordingsRecordingId(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Recordings[':recordingId'].$get(args, options))
}

export async function deleteLiveTvRecordingsRecordingId(
  args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Recordings[':recordingId'].$delete(args, options))
}

export async function getLiveTvRecordingsFolders(
  args: InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Recordings.Folders.$get(args, options))
}

export async function getLiveTvSeriesTimers(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.SeriesTimers.$get(args, options))
}

export async function postLiveTvSeriesTimers(
  args: InferRequestType<typeof client.LiveTv.SeriesTimers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.SeriesTimers.$post(args, options))
}

export async function getLiveTvSeriesTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.SeriesTimers[':timerId'].$get(args, options))
}

export async function postLiveTvSeriesTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.SeriesTimers[':timerId'].$post(args, options))
}

export async function deleteLiveTvSeriesTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.SeriesTimers[':timerId'].$delete(args, options))
}

export async function getLiveTvTimers(
  args: InferRequestType<typeof client.LiveTv.Timers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers.$get(args, options))
}

export async function postLiveTvTimers(
  args: InferRequestType<typeof client.LiveTv.Timers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers.$post(args, options))
}

export async function getLiveTvTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers[':timerId'].$get(args, options))
}

export async function postLiveTvTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers[':timerId'].$post(args, options))
}

export async function deleteLiveTvTimersTimerId(
  args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers[':timerId'].$delete(args, options))
}

export async function getLiveTvTimersDefaults(
  args: InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Timers.Defaults.$get(args, options))
}

export async function postLiveTvTunerHosts(
  args: InferRequestType<typeof client.LiveTv.TunerHosts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.TunerHosts.$post(args, options))
}

export async function deleteLiveTvTunerHosts(
  args: InferRequestType<typeof client.LiveTv.TunerHosts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.TunerHosts.$delete(args, options))
}

export async function getLiveTvTunerHostsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.LiveTv.TunerHosts.Types.$get(undefined, options))
}

export async function postLiveTvTunersTunerIdReset(
  args: InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Tuners[':tunerId'].Reset.$post(args, options))
}

export async function getLiveTvTunersDiscover(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Tuners.Discover.$get(args, options))
}

export async function getLiveTvTunersDiscvover(
  args: InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveTv.Tuners.Discvover.$get(args, options))
}

export async function getLocalizationCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.Localization.Countries.$get(undefined, options))
}

export async function getLocalizationCultures(options?: ClientRequestOptions) {
  return await parseResponse(client.Localization.Cultures.$get(undefined, options))
}

export async function getLocalizationOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.Localization.Options.$get(undefined, options))
}

export async function getLocalizationParentalRatings(options?: ClientRequestOptions) {
  return await parseResponse(client.Localization.ParentalRatings.$get(undefined, options))
}

export async function getAudioItemIdLyrics(
  args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].Lyrics.$get(args, options))
}

export async function postAudioItemIdLyrics(
  args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].Lyrics.$post(args, options))
}

export async function deleteAudioItemIdLyrics(
  args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].Lyrics.$delete(args, options))
}

export async function getAudioItemIdRemoteSearchLyrics(
  args: InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].RemoteSearch.Lyrics.$get(args, options))
}

export async function postAudioItemIdRemoteSearchLyricsLyricId(
  args: InferRequestType<
    (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Audio[':itemId'].RemoteSearch.Lyrics[':lyricId'].$post(args, options),
  )
}

export async function getProvidersLyricsLyricId(
  args: InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Providers.Lyrics[':lyricId'].$get(args, options))
}

export async function getItemsItemIdPlaybackInfo(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].PlaybackInfo.$get(args, options))
}

export async function postItemsItemIdPlaybackInfo(
  args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].PlaybackInfo.$post(args, options))
}

export async function postLiveStreamsClose(
  args: InferRequestType<typeof client.LiveStreams.Close.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveStreams.Close.$post(args, options))
}

export async function postLiveStreamsOpen(
  args: InferRequestType<typeof client.LiveStreams.Open.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LiveStreams.Open.$post(args, options))
}

export async function getPlaybackBitrateTest(
  args: InferRequestType<typeof client.Playback.BitrateTest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playback.BitrateTest.$get(args, options))
}

export async function getMediaSegmentsItemId(
  args: InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MediaSegments[':itemId'].$get(args, options))
}

export async function getMoviesRecommendations(
  args: InferRequestType<typeof client.Movies.Recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Movies.Recommendations.$get(args, options))
}

export async function getMusicGenresGenreName(
  args: InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MusicGenres[':genreName'].$get(args, options))
}

export async function getPackages(options?: ClientRequestOptions) {
  return await parseResponse(client.Packages.$get(undefined, options))
}

export async function getPackagesName(
  args: InferRequestType<(typeof client.Packages)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Packages[':name'].$get(args, options))
}

export async function postPackagesInstalledName(
  args: InferRequestType<(typeof client.Packages.Installed)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Packages.Installed[':name'].$post(args, options))
}

export async function deletePackagesInstallingPackageId(
  args: InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Packages.Installing[':packageId'].$delete(args, options))
}

export async function getRepositories(options?: ClientRequestOptions) {
  return await parseResponse(client.Repositories.$get(undefined, options))
}

export async function postRepositories(
  args: InferRequestType<typeof client.Repositories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Repositories.$post(args, options))
}

export async function getPersons(
  args: InferRequestType<typeof client.Persons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Persons.$get(args, options))
}

export async function getPersonsName(
  args: InferRequestType<(typeof client.Persons)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Persons[':name'].$get(args, options))
}

export async function postPlaylists(
  args: InferRequestType<typeof client.Playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists.$post(args, options))
}

export async function getPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].$get(args, options))
}

export async function postPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].$post(args, options))
}

export async function getPlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Items.$get(args, options))
}

export async function postPlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Items.$post(args, options))
}

export async function deletePlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Items.$delete(args, options))
}

export async function postPlaylistsPlaylistIdItemsItemIdMoveNewIndex(
  args: InferRequestType<
    (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Playlists[':playlistId'].Items[':itemId'].Move[':newIndex'].$post(args, options),
  )
}

export async function getPlaylistsPlaylistIdUsers(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Users.$get(args, options))
}

export async function getPlaylistsPlaylistIdUsersUserId(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Users[':userId'].$get(args, options))
}

export async function postPlaylistsPlaylistIdUsersUserId(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Playlists[':playlistId'].Users[':userId'].$post(args, options))
}

export async function deletePlaylistsPlaylistIdUsersUserId(
  args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Playlists[':playlistId'].Users[':userId'].$delete(args, options),
  )
}

export async function postSessionsPlaying(
  args: InferRequestType<typeof client.Sessions.Playing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Playing.$post(args, options))
}

export async function postSessionsPlayingPing(
  args: InferRequestType<typeof client.Sessions.Playing.Ping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Playing.Ping.$post(args, options))
}

export async function postSessionsPlayingProgress(
  args: InferRequestType<typeof client.Sessions.Playing.Progress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Playing.Progress.$post(args, options))
}

export async function postSessionsPlayingStopped(
  args: InferRequestType<typeof client.Sessions.Playing.Stopped.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Playing.Stopped.$post(args, options))
}

export async function postUserPlayedItemsItemId(
  args: InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserPlayedItems[':itemId'].$post(args, options))
}

export async function deleteUserPlayedItemsItemId(
  args: InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserPlayedItems[':itemId'].$delete(args, options))
}

export async function getPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.Plugins.$get(undefined, options))
}

export async function deletePluginsPluginId(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'].$delete(args, options))
}

export async function deletePluginsPluginIdVersion(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'][':version'].$delete(args, options))
}

export async function postPluginsPluginIdVersionDisable(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'][':version'].Disable.$post(args, options))
}

export async function postPluginsPluginIdVersionEnable(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'][':version'].Enable.$post(args, options))
}

export async function getPluginsPluginIdVersionImage(
  args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'][':version'].Image.$get(args, options))
}

export async function getPluginsPluginIdConfiguration(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'].Configuration.$get(args, options))
}

export async function postPluginsPluginIdConfiguration(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'].Configuration.$post(args, options))
}

export async function postPluginsPluginIdManifest(
  args: InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Plugins[':pluginId'].Manifest.$post(args, options))
}

export async function postQuickConnectAuthorize(
  args: InferRequestType<typeof client.QuickConnect.Authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.QuickConnect.Authorize.$post(args, options))
}

export async function getQuickConnectConnect(
  args: InferRequestType<typeof client.QuickConnect.Connect.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.QuickConnect.Connect.$get(args, options))
}

export async function getQuickConnectEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client.QuickConnect.Enabled.$get(undefined, options))
}

export async function postQuickConnectInitiate(options?: ClientRequestOptions) {
  return await parseResponse(client.QuickConnect.Initiate.$post(undefined, options))
}

export async function getItemsItemIdRemoteImages(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].RemoteImages.$get(args, options))
}

export async function postItemsItemIdRemoteImagesDownload(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].RemoteImages.Download.$post(args, options))
}

export async function getItemsItemIdRemoteImagesProviders(
  args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].RemoteImages.Providers.$get(args, options))
}

export async function getScheduledTasks(
  args: InferRequestType<typeof client.ScheduledTasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ScheduledTasks.$get(args, options))
}

export async function getScheduledTasksTaskId(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ScheduledTasks[':taskId'].$get(args, options))
}

export async function postScheduledTasksTaskIdTriggers(
  args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ScheduledTasks[':taskId'].Triggers.$post(args, options))
}

export async function postScheduledTasksRunningTaskId(
  args: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ScheduledTasks.Running[':taskId'].$post(args, options))
}

export async function deleteScheduledTasksRunningTaskId(
  args: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ScheduledTasks.Running[':taskId'].$delete(args, options))
}

export async function getSearchHints(
  args: InferRequestType<typeof client.Search.Hints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Search.Hints.$get(args, options))
}

export async function getAuthPasswordResetProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.Auth.PasswordResetProviders.$get(undefined, options))
}

export async function getAuthProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.Auth.Providers.$get(undefined, options))
}

export async function getSessions(
  args: InferRequestType<typeof client.Sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.$get(args, options))
}

export async function postSessionsSessionIdCommand(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Command.$post(args, options))
}

export async function postSessionsSessionIdCommandCommand(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Command'][':command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Command[':command'].$post(args, options))
}

export async function postSessionsSessionIdMessage(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Message.$post(args, options))
}

export async function postSessionsSessionIdPlaying(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Playing.$post(args, options))
}

export async function postSessionsSessionIdPlayingCommand(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Playing[':command'].$post(args, options))
}

export async function postSessionsSessionIdSystemCommand(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].System[':command'].$post(args, options))
}

export async function postSessionsSessionIdUserUserId(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].User[':userId'].$post(args, options))
}

export async function deleteSessionsSessionIdUserUserId(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].User[':userId'].$delete(args, options))
}

export async function postSessionsSessionIdViewing(
  args: InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions[':sessionId'].Viewing.$post(args, options))
}

export async function postSessionsCapabilities(
  args: InferRequestType<typeof client.Sessions.Capabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Capabilities.$post(args, options))
}

export async function postSessionsCapabilitiesFull(
  args: InferRequestType<typeof client.Sessions.Capabilities.Full.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Capabilities.Full.$post(args, options))
}

export async function postSessionsLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.Sessions.Logout.$post(undefined, options))
}

export async function postSessionsViewing(
  args: InferRequestType<typeof client.Sessions.Viewing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Sessions.Viewing.$post(args, options))
}

export async function postStartupComplete(options?: ClientRequestOptions) {
  return await parseResponse(client.Startup.Complete.$post(undefined, options))
}

export async function getStartupConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.Startup.Configuration.$get(undefined, options))
}

export async function postStartupConfiguration(
  args: InferRequestType<typeof client.Startup.Configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Startup.Configuration.$post(args, options))
}

export async function getStartupFirstUser(options?: ClientRequestOptions) {
  return await parseResponse(client.Startup.FirstUser.$get(undefined, options))
}

export async function postStartupRemoteAccess(
  args: InferRequestType<typeof client.Startup.RemoteAccess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Startup.RemoteAccess.$post(args, options))
}

export async function getStartupUser(options?: ClientRequestOptions) {
  return await parseResponse(client.Startup.User.$get(undefined, options))
}

export async function postStartupUser(
  args: InferRequestType<typeof client.Startup.User.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Startup.User.$post(args, options))
}

export async function getStudios(
  args: InferRequestType<typeof client.Studios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Studios.$get(args, options))
}

export async function getStudiosName(
  args: InferRequestType<(typeof client.Studios)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Studios[':name'].$get(args, options))
}

export async function getFallbackFontFonts(options?: ClientRequestOptions) {
  return await parseResponse(client.FallbackFont.Fonts.$get(undefined, options))
}

export async function getFallbackFontFontsName(
  args: InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FallbackFont.Fonts[':name'].$get(args, options))
}

export async function getItemsItemIdRemoteSearchSubtitlesLanguage(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(args, options),
  )
}

export async function postItemsItemIdRemoteSearchSubtitlesSubtitleId(
  args: InferRequestType<
    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Items[':itemId'].RemoteSearch.Subtitles[':subtitleId'].$post(args, options),
  )
}

export async function getProvidersSubtitlesSubtitlesSubtitleId(
  args: InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Providers.Subtitles.Subtitles[':subtitleId'].$get(args, options),
  )
}

export async function getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8(
  args: InferRequestType<
    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
      args,
      options,
    ),
  )
}

export async function postVideosItemIdSubtitles(
  args: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].Subtitles.$post(args, options))
}

export async function deleteVideosItemIdSubtitlesIndex(
  args: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].Subtitles[':index'].$delete(args, options))
}

export async function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormat(
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
      ':routeStartPositionTicks'
    ]['Stream.:routeFormat'].$get(args, options),
  )
}

export async function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormat(
  args: InferRequestType<
    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
      'Stream.:routeFormat'
    ].$get(args, options),
  )
}

export async function getItemsSuggestions(
  args: InferRequestType<typeof client.Items.Suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Suggestions.$get(args, options))
}

export async function getSyncPlayId(
  args: InferRequestType<(typeof client.SyncPlay)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay[':id'].$get(args, options))
}

export async function postSyncPlayBuffering(
  args: InferRequestType<typeof client.SyncPlay.Buffering.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Buffering.$post(args, options))
}

export async function postSyncPlayJoin(
  args: InferRequestType<typeof client.SyncPlay.Join.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Join.$post(args, options))
}

export async function postSyncPlayLeave(options?: ClientRequestOptions) {
  return await parseResponse(client.SyncPlay.Leave.$post(undefined, options))
}

export async function getSyncPlayList(options?: ClientRequestOptions) {
  return await parseResponse(client.SyncPlay.List.$get(undefined, options))
}

export async function postSyncPlayMovePlaylistItem(
  args: InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.MovePlaylistItem.$post(args, options))
}

export async function postSyncPlayNew(
  args: InferRequestType<typeof client.SyncPlay.New.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.New.$post(args, options))
}

export async function postSyncPlayNextItem(
  args: InferRequestType<typeof client.SyncPlay.NextItem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.NextItem.$post(args, options))
}

export async function postSyncPlayPause(options?: ClientRequestOptions) {
  return await parseResponse(client.SyncPlay.Pause.$post(undefined, options))
}

export async function postSyncPlayPing(
  args: InferRequestType<typeof client.SyncPlay.Ping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Ping.$post(args, options))
}

export async function postSyncPlayPreviousItem(
  args: InferRequestType<typeof client.SyncPlay.PreviousItem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.PreviousItem.$post(args, options))
}

export async function postSyncPlayQueue(
  args: InferRequestType<typeof client.SyncPlay.Queue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Queue.$post(args, options))
}

export async function postSyncPlayReady(
  args: InferRequestType<typeof client.SyncPlay.Ready.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Ready.$post(args, options))
}

export async function postSyncPlayRemoveFromPlaylist(
  args: InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.RemoveFromPlaylist.$post(args, options))
}

export async function postSyncPlaySeek(
  args: InferRequestType<typeof client.SyncPlay.Seek.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.Seek.$post(args, options))
}

export async function postSyncPlaySetIgnoreWait(
  args: InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.SetIgnoreWait.$post(args, options))
}

export async function postSyncPlaySetNewQueue(
  args: InferRequestType<typeof client.SyncPlay.SetNewQueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.SetNewQueue.$post(args, options))
}

export async function postSyncPlaySetPlaylistItem(
  args: InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.SetPlaylistItem.$post(args, options))
}

export async function postSyncPlaySetRepeatMode(
  args: InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.SetRepeatMode.$post(args, options))
}

export async function postSyncPlaySetShuffleMode(
  args: InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SyncPlay.SetShuffleMode.$post(args, options))
}

export async function postSyncPlayStop(options?: ClientRequestOptions) {
  return await parseResponse(client.SyncPlay.Stop.$post(undefined, options))
}

export async function postSyncPlayUnpause(options?: ClientRequestOptions) {
  return await parseResponse(client.SyncPlay.Unpause.$post(undefined, options))
}

export async function getSystemEndpoint(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Endpoint.$get(undefined, options))
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Info.$get(undefined, options))
}

export async function getSystemInfoPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Info.Public.$get(undefined, options))
}

export async function getSystemInfoStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Info.Storage.$get(undefined, options))
}

export async function getSystemLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Logs.$get(undefined, options))
}

export async function getSystemLogsLog(
  args: InferRequestType<typeof client.System.Logs.Log.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.System.Logs.Log.$get(args, options))
}

export async function getSystemPing(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Ping.$get(undefined, options))
}

export async function postSystemPing(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Ping.$post(undefined, options))
}

export async function postSystemRestart(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Restart.$post(undefined, options))
}

export async function postSystemShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client.System.Shutdown.$post(undefined, options))
}

export async function getGetUtcTime(options?: ClientRequestOptions) {
  return await parseResponse(client.GetUtcTime.$get(undefined, options))
}

export async function getTrailers(
  args: InferRequestType<typeof client.Trailers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Trailers.$get(args, options))
}

export async function getVideosItemIdTrickplayWidthIndexJpg(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':itemId'].Trickplay[':width'][':index.jpg'].$get(args, options),
  )
}

export async function getVideosItemIdTrickplayWidthTilesM3u8(
  args: InferRequestType<
    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':itemId'].Trickplay[':width']['tiles.m3u8'].$get(args, options),
  )
}

export async function getShowsSeriesIdEpisodes(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shows[':seriesId'].Episodes.$get(args, options))
}

export async function getShowsSeriesIdSeasons(
  args: InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shows[':seriesId'].Seasons.$get(args, options))
}

export async function getShowsNextUp(
  args: InferRequestType<typeof client.Shows.NextUp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shows.NextUp.$get(args, options))
}

export async function getShowsUpcoming(
  args: InferRequestType<typeof client.Shows.Upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Shows.Upcoming.$get(args, options))
}

export async function getAudioItemIdUniversal(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].universal.$get(args, options))
}

export async function headAudioItemIdUniversal(
  args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Audio[':itemId'].universal.$head(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.Users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.Users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users[':userId'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.Users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users[':userId'].$delete(args, options))
}

export async function postUsersUserIdPolicy(
  args: InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users[':userId'].Policy.$post(args, options))
}

export async function postUsersAuthenticateByName(
  args: InferRequestType<typeof client.Users.AuthenticateByName.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.AuthenticateByName.$post(args, options))
}

export async function postUsersAuthenticateWithQuickConnect(
  args: InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.AuthenticateWithQuickConnect.$post(args, options))
}

export async function postUsersConfiguration(
  args: InferRequestType<typeof client.Users.Configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.Configuration.$post(args, options))
}

export async function postUsersForgotPassword(
  args: InferRequestType<typeof client.Users.ForgotPassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.ForgotPassword.$post(args, options))
}

export async function postUsersForgotPasswordPin(
  args: InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.ForgotPassword.Pin.$post(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.Users.Me.$get(undefined, options))
}

export async function postUsersNew(
  args: InferRequestType<typeof client.Users.New.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.New.$post(args, options))
}

export async function postUsersPassword(
  args: InferRequestType<typeof client.Users.Password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.Password.$post(args, options))
}

export async function getUsersPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.Users.Public.$get(undefined, options))
}

export async function getItemsItemIdIntros(
  args: InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].Intros.$get(args, options))
}

export async function getItemsItemIdLocalTrailers(
  args: InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].LocalTrailers.$get(args, options))
}

export async function getItemsItemIdSpecialFeatures(
  args: InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':itemId'].SpecialFeatures.$get(args, options))
}

export async function getItemsLatest(
  args: InferRequestType<typeof client.Items.Latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Latest.$get(args, options))
}

export async function getItemsRoot(
  args: InferRequestType<typeof client.Items.Root.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.Root.$get(args, options))
}

export async function postUserFavoriteItemsItemId(
  args: InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserFavoriteItems[':itemId'].$post(args, options))
}

export async function deleteUserFavoriteItemsItemId(
  args: InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserFavoriteItems[':itemId'].$delete(args, options))
}

export async function postUserItemsItemIdRating(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserItems[':itemId'].Rating.$post(args, options))
}

export async function deleteUserItemsItemIdRating(
  args: InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserItems[':itemId'].Rating.$delete(args, options))
}

export async function getUserViews(
  args: InferRequestType<typeof client.UserViews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserViews.$get(args, options))
}

export async function getUserViewsGroupingOptions(
  args: InferRequestType<typeof client.UserViews.GroupingOptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UserViews.GroupingOptions.$get(args, options))
}

export async function getVideosVideoIdMediaSourceIdAttachmentsIndex(
  args: InferRequestType<
    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(args, options),
  )
}

export async function getVideosItemIdAdditionalParts(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].AdditionalParts.$get(args, options))
}

export async function deleteVideosItemIdAlternateSources(
  args: InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].AlternateSources.$delete(args, options))
}

export async function getVideosItemIdStream(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].stream.$get(args, options))
}

export async function headVideosItemIdStream(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId'].stream.$head(args, options))
}

export async function getVideosItemIdStreamContainer(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId']['stream.:container'].$get(args, options))
}

export async function headVideosItemIdStreamContainer(
  args: InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos[':itemId']['stream.:container'].$head(args, options))
}

export async function postVideosMergeVersions(
  args: InferRequestType<typeof client.Videos.MergeVersions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Videos.MergeVersions.$post(args, options))
}

export async function getYears(
  args: InferRequestType<typeof client.Years.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Years.$get(args, options))
}

export async function getYearsYear(
  args: InferRequestType<(typeof client.Years)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Years[':year'].$get(args, options))
}
