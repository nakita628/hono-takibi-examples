import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCmsBlogs202609AuthorsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.cursor.$get(args, options))
}

export async function getCmsBlogs202609AuthorsCursorQuery(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].authors.cursor.query.$get(args, options))
}

export async function getCmsBlogs202609Posts(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.$get(args, options))
}

export async function postCmsBlogs202609Posts(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.$post(args, options))
}

export async function postCmsBlogs202609PostsBatchArchive(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.batch.archive.$post(args, options))
}

export async function postCmsBlogs202609PostsBatchCreate(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.batch.create.$post(args, options))
}

export async function postCmsBlogs202609PostsBatchRead(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.batch.read.$post(args, options))
}

export async function postCmsBlogs202609PostsBatchUpdate(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.batch.update.$post(args, options))
}

export async function postCmsBlogs202609PostsClone(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.clone.$post(args, options))
}

export async function getCmsBlogs202609PostsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.cursor.$get(args, options))
}

export async function getCmsBlogs202609PostsCursorQuery(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.cursor.query.$get(args, options))
}

export async function postCmsBlogs202609PostsMultiLanguageAttachToLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts['multi-language']['attach-to-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609PostsMultiLanguageCreateLanguageVariation(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts['multi-language']['create-language-variation'].$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609PostsMultiLanguageDetachFromLangGroup(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts['multi-language']['detach-from-lang-group'].$post(
      args,
      options,
    ),
  )
}

export async function putCmsBlogs202609PostsMultiLanguageSetNewLangPrimary(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts['multi-language']['set-new-lang-primary'].$put(args, options),
  )
}

export async function postCmsBlogs202609PostsMultiLanguageUpdateLanguages(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts['multi-language']['update-languages'].$post(args, options),
  )
}

export async function postCmsBlogs202609PostsSchedule(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts.schedule.$post(args, options))
}

export async function getCmsBlogs202609PostsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$get(args, options))
}

export async function deleteCmsBlogs202609PostsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$delete(args, options))
}

export async function patchCmsBlogs202609PostsObjectId(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$patch(args, options))
}

export async function getCmsBlogs202609PostsObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(args, options),
  )
}

export async function patchCmsBlogs202609PostsObjectIdDraft(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].draft.$patch(args, options),
  )
}

export async function postCmsBlogs202609PostsObjectIdDraftPushLive(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].draft['push-live'].$post(args, options),
  )
}

export async function postCmsBlogs202609PostsObjectIdDraftReset(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].draft.reset.$post(args, options),
  )
}

export async function getCmsBlogs202609PostsObjectIdRevisions(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(args, options),
  )
}

export async function getCmsBlogs202609PostsObjectIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(args, options),
  )
}

export async function postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestore(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function postCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraft(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'][
      'restore-to-draft'
    ].$post(args, options),
  )
}

export async function getCmsBlogs202609TagsCursor(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.cursor.$get(args, options))
}

export async function getCmsBlogs202609TagsCursorQuery(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cms.blogs['2026-09'].tags.cursor.query.$get(args, options))
}
