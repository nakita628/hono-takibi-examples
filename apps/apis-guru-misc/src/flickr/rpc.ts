import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOauthAccessToken(
  args: InferRequestType<typeof client.oauth.access_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token.$get(args, options))
}

export async function getOauthRequestToken(
  args: InferRequestType<typeof client.oauth.request_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.request_token.$get(args, options))
}

export async function getRestMethodFlickrFavoritesGetContext(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.favorites.getContext'].$get(args, options))
}

export async function getRestMethodFlickrFavoritesGetList(
  args: InferRequestType<(typeof client)['rest?method=flickr.favorites.getList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.favorites.getList'].$get(args, options))
}

export async function getRestMethodFlickrGalleriesGetPhotos(
  args: InferRequestType<(typeof client)['rest?method=flickr.galleries.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.galleries.getPhotos'].$get(args, options))
}

export async function getRestMethodFlickrGroupsDiscussRepliesGetInfo(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.replies.getInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.groups.discuss.replies.getInfo'].$get(args, options),
  )
}

export async function getRestMethodFlickrGroupsDiscussTopicsGetInfo(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.groups.discuss.topics.getInfo'].$get(args, options),
  )
}

export async function getRestMethodFlickrGroupsDiscussTopicsGetList(
  args: InferRequestType<
    (typeof client)['rest?method=flickr.groups.discuss.topics.getList']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.groups.discuss.topics.getList'].$get(args, options),
  )
}

export async function getRestMethodFlickrGroupsGetInfo(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.groups.getInfo'].$get(args, options))
}

export async function getRestMethodFlickrGroupsPoolsGetContext(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.groups.pools.getContext'].$get(args, options),
  )
}

export async function getRestMethodFlickrGroupsPoolsGetPhotos(
  args: InferRequestType<(typeof client)['rest?method=flickr.groups.pools.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.groups.pools.getPhotos'].$get(args, options),
  )
}

export async function getRestMethodFlickrPeopleGetInfo(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.people.getInfo'].$get(args, options))
}

export async function getRestMethodFlickrPeopleGetPhotos(
  args: InferRequestType<(typeof client)['rest?method=flickr.people.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.people.getPhotos'].$get(args, options))
}

export async function getRestMethodFlickrPhotolistGetContext(
  args: InferRequestType<(typeof client)['rest?method=flickr.photolist.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photolist.getContext'].$get(args, options))
}

export async function getRestMethodFlickrPhotosGetContext(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photos.getContext'].$get(args, options))
}

export async function getRestMethodFlickrPhotosGetExif(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getExif']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photos.getExif'].$get(args, options))
}

export async function getRestMethodFlickrPhotosGetInfo(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photos.getInfo'].$get(args, options))
}

export async function getRestMethodFlickrPhotosGetSizes(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.getSizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photos.getSizes'].$get(args, options))
}

export async function getRestMethodFlickrPhotosLicensesGetInfo(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.licenses.getInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['rest?method=flickr.photos.licenses.getInfo'].$get(args, options),
  )
}

export async function getRestMethodFlickrPhotosSearch(
  args: InferRequestType<(typeof client)['rest?method=flickr.photos.search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photos.search'].$get(args, options))
}

export async function getRestMethodFlickrPhotosetsGetContext(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getContext']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photosets.getContext'].$get(args, options))
}

export async function getRestMethodFlickrPhotosetsGetList(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photosets.getList'].$get(args, options))
}

export async function getRestMethodFlickrPhotosetsGetPhotos(
  args: InferRequestType<(typeof client)['rest?method=flickr.photosets.getPhotos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.photosets.getPhotos'].$get(args, options))
}

export async function getRestMethodFlickrTestEcho(
  args: InferRequestType<(typeof client)['rest?method=flickr.test.echo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rest?method=flickr.test.echo'].$get(args, options))
}

export async function postUpload(
  args: InferRequestType<typeof client.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upload.$post(args, options))
}
