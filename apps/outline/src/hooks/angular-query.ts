import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccessRequestsApproveKey() {
  return ['accessRequests.approve'] as const
}

export function getAccessRequestsCreateKey() {
  return ['accessRequests.create'] as const
}

export function getAccessRequestsDismissKey() {
  return ['accessRequests.dismiss'] as const
}

export function getAccessRequestsInfoKey() {
  return ['accessRequests.info'] as const
}

export function getApiKeysCreateKey() {
  return ['apiKeys.create'] as const
}

export function getApiKeysDeleteKey() {
  return ['apiKeys.delete'] as const
}

export function getApiKeysListKey() {
  return ['apiKeys.list'] as const
}

export function getAttachmentsCreateKey() {
  return ['attachments.create'] as const
}

export function getAttachmentsCreateFromUrlKey() {
  return ['attachments.createFromUrl'] as const
}

export function getAttachmentsDeleteKey() {
  return ['attachments.delete'] as const
}

export function getAttachmentsListKey() {
  return ['attachments.list'] as const
}

export function getAttachmentsRedirectKey() {
  return ['attachments.redirect'] as const
}

export function getAuthConfigKey() {
  return ['auth.config'] as const
}

export function getAuthDeleteKey() {
  return ['auth.delete'] as const
}

export function getAuthInfoKey() {
  return ['auth.info'] as const
}

export function getCollectionsAddGroupKey() {
  return ['collections.add_group'] as const
}

export function getCollectionsAddUserKey() {
  return ['collections.add_user'] as const
}

export function getCollectionsArchiveKey() {
  return ['collections.archive'] as const
}

export function getCollectionsCreateKey() {
  return ['collections.create'] as const
}

export function getCollectionsDeleteKey() {
  return ['collections.delete'] as const
}

export function getCollectionsDocumentsKey() {
  return ['collections.documents'] as const
}

export function getCollectionsDuplicateKey() {
  return ['collections.duplicate'] as const
}

export function getCollectionsExportKey() {
  return ['collections.export'] as const
}

export function getCollectionsExportAllKey() {
  return ['collections.export_all'] as const
}

export function getCollectionsGroupMembershipsKey() {
  return ['collections.group_memberships'] as const
}

export function getCollectionsImportKey() {
  return ['collections.import'] as const
}

export function getCollectionsInfoKey() {
  return ['collections.info'] as const
}

export function getCollectionsListKey() {
  return ['collections.list'] as const
}

export function getCollectionsMembershipsKey() {
  return ['collections.memberships'] as const
}

export function getCollectionsMoveKey() {
  return ['collections.move'] as const
}

export function getCollectionsRemoveGroupKey() {
  return ['collections.remove_group'] as const
}

export function getCollectionsRemoveUserKey() {
  return ['collections.remove_user'] as const
}

export function getCollectionsRestoreKey() {
  return ['collections.restore'] as const
}

export function getCollectionsUpdateKey() {
  return ['collections.update'] as const
}

export function getCommentsAddReactionKey() {
  return ['comments.add_reaction'] as const
}

export function getCommentsCreateKey() {
  return ['comments.create'] as const
}

export function getCommentsDeleteKey() {
  return ['comments.delete'] as const
}

export function getCommentsInfoKey() {
  return ['comments.info'] as const
}

export function getCommentsListKey() {
  return ['comments.list'] as const
}

export function getCommentsRemoveReactionKey() {
  return ['comments.remove_reaction'] as const
}

export function getCommentsResolveKey() {
  return ['comments.resolve'] as const
}

export function getCommentsUnresolveKey() {
  return ['comments.unresolve'] as const
}

export function getCommentsUpdateKey() {
  return ['comments.update'] as const
}

export function getDataAttributesCreateKey() {
  return ['dataAttributes.create'] as const
}

export function getDataAttributesDeleteKey() {
  return ['dataAttributes.delete'] as const
}

export function getDataAttributesInfoKey() {
  return ['dataAttributes.info'] as const
}

export function getDataAttributesListKey() {
  return ['dataAttributes.list'] as const
}

export function getDataAttributesUpdateKey() {
  return ['dataAttributes.update'] as const
}

export function getDocumentsAddGroupKey() {
  return ['documents.add_group'] as const
}

export function getDocumentsAddUserKey() {
  return ['documents.add_user'] as const
}

export function getDocumentsAnswerQuestionKey() {
  return ['documents.answerQuestion'] as const
}

export function getDocumentsArchiveKey() {
  return ['documents.archive'] as const
}

export function getDocumentsArchivedKey() {
  return ['documents.archived'] as const
}

export function getDocumentsCreateKey() {
  return ['documents.create'] as const
}

export function getDocumentsDeleteKey() {
  return ['documents.delete'] as const
}

export function getDocumentsDeletedKey() {
  return ['documents.deleted'] as const
}

export function getDocumentsDocumentsKey() {
  return ['documents.documents'] as const
}

export function getDocumentsDraftsKey() {
  return ['documents.drafts'] as const
}

export function getDocumentsDuplicateKey() {
  return ['documents.duplicate'] as const
}

export function getDocumentsEmptyTrashKey() {
  return ['documents.empty_trash'] as const
}

export function getDocumentsExportKey() {
  return ['documents.export'] as const
}

export function getDocumentsGroupMembershipsKey() {
  return ['documents.group_memberships'] as const
}

export function getDocumentsImportKey() {
  return ['documents.import'] as const
}

export function getDocumentsInfoKey() {
  return ['documents.info'] as const
}

export function getDocumentsInsightsKey() {
  return ['documents.insights'] as const
}

export function getDocumentsListKey() {
  return ['documents.list'] as const
}

export function getDocumentsMembershipsKey() {
  return ['documents.memberships'] as const
}

export function getDocumentsMoveKey() {
  return ['documents.move'] as const
}

export function getDocumentsRemoveGroupKey() {
  return ['documents.remove_group'] as const
}

export function getDocumentsRemoveUserKey() {
  return ['documents.remove_user'] as const
}

export function getDocumentsRestoreKey() {
  return ['documents.restore'] as const
}

export function getDocumentsSearchKey() {
  return ['documents.search'] as const
}

export function getDocumentsSearchTitlesKey() {
  return ['documents.search_titles'] as const
}

export function getDocumentsTemplatizeKey() {
  return ['documents.templatize'] as const
}

export function getDocumentsUnpublishKey() {
  return ['documents.unpublish'] as const
}

export function getDocumentsUpdateKey() {
  return ['documents.update'] as const
}

export function getDocumentsUsersKey() {
  return ['documents.users'] as const
}

export function getDocumentsViewedKey() {
  return ['documents.viewed'] as const
}

export function getEventsListKey() {
  return ['events.list'] as const
}

export function getFileOperationsDeleteKey() {
  return ['fileOperations.delete'] as const
}

export function getFileOperationsInfoKey() {
  return ['fileOperations.info'] as const
}

export function getFileOperationsListKey() {
  return ['fileOperations.list'] as const
}

export function getFileOperationsRedirectKey() {
  return ['fileOperations.redirect'] as const
}

export function getGroupMembershipsListKey() {
  return ['groupMemberships.list'] as const
}

export function getGroupsAddUserKey() {
  return ['groups.add_user'] as const
}

export function getGroupsCreateKey() {
  return ['groups.create'] as const
}

export function getGroupsDeleteKey() {
  return ['groups.delete'] as const
}

export function getGroupsInfoKey() {
  return ['groups.info'] as const
}

export function getGroupsListKey() {
  return ['groups.list'] as const
}

export function getGroupsMembershipsKey() {
  return ['groups.memberships'] as const
}

export function getGroupsRemoveUserKey() {
  return ['groups.remove_user'] as const
}

export function getGroupsUpdateKey() {
  return ['groups.update'] as const
}

export function getGroupsUpdateUserKey() {
  return ['groups.update_user'] as const
}

export function getNotificationsListKey() {
  return ['notifications.list'] as const
}

export function getNotificationsUpdateKey() {
  return ['notifications.update'] as const
}

export function getNotificationsUpdateAllKey() {
  return ['notifications.update_all'] as const
}

export function getOauthAuthenticationsDeleteKey() {
  return ['oauthAuthentications.delete'] as const
}

export function getOauthAuthenticationsListKey() {
  return ['oauthAuthentications.list'] as const
}

export function getOauthClientsCreateKey() {
  return ['oauthClients.create'] as const
}

export function getOauthClientsDeleteKey() {
  return ['oauthClients.delete'] as const
}

export function getOauthClientsInfoKey() {
  return ['oauthClients.info'] as const
}

export function getOauthClientsListKey() {
  return ['oauthClients.list'] as const
}

export function getOauthClientsRotateSecretKey() {
  return ['oauthClients.rotate_secret'] as const
}

export function getOauthClientsUpdateKey() {
  return ['oauthClients.update'] as const
}

export function getPinsCreateKey() {
  return ['pins.create'] as const
}

export function getPinsDeleteKey() {
  return ['pins.delete'] as const
}

export function getPinsInfoKey() {
  return ['pins.info'] as const
}

export function getPinsListKey() {
  return ['pins.list'] as const
}

export function getPinsUpdateKey() {
  return ['pins.update'] as const
}

export function getReactionsListKey() {
  return ['reactions.list'] as const
}

export function getRevisionsDeleteKey() {
  return ['revisions.delete'] as const
}

export function getRevisionsExportKey() {
  return ['revisions.export'] as const
}

export function getRevisionsInfoKey() {
  return ['revisions.info'] as const
}

export function getRevisionsListKey() {
  return ['revisions.list'] as const
}

export function getRevisionsUpdateKey() {
  return ['revisions.update'] as const
}

export function getSharesCreateKey() {
  return ['shares.create'] as const
}

export function getSharesInfoKey() {
  return ['shares.info'] as const
}

export function getSharesListKey() {
  return ['shares.list'] as const
}

export function getSharesRevokeKey() {
  return ['shares.revoke'] as const
}

export function getSharesUpdateKey() {
  return ['shares.update'] as const
}

export function getStarsCreateKey() {
  return ['stars.create'] as const
}

export function getStarsDeleteKey() {
  return ['stars.delete'] as const
}

export function getStarsListKey() {
  return ['stars.list'] as const
}

export function getStarsUpdateKey() {
  return ['stars.update'] as const
}

export function getSubscriptionsCreateKey() {
  return ['subscriptions.create'] as const
}

export function getSubscriptionsDeleteKey() {
  return ['subscriptions.delete'] as const
}

export function getSubscriptionsInfoKey() {
  return ['subscriptions.info'] as const
}

export function getSubscriptionsListKey() {
  return ['subscriptions.list'] as const
}

export function getTemplatesCreateKey() {
  return ['templates.create'] as const
}

export function getTemplatesDeleteKey() {
  return ['templates.delete'] as const
}

export function getTemplatesDuplicateKey() {
  return ['templates.duplicate'] as const
}

export function getTemplatesInfoKey() {
  return ['templates.info'] as const
}

export function getTemplatesListKey() {
  return ['templates.list'] as const
}

export function getTemplatesRestoreKey() {
  return ['templates.restore'] as const
}

export function getTemplatesUpdateKey() {
  return ['templates.update'] as const
}

export function getUserMembershipsListKey() {
  return ['userMemberships.list'] as const
}

export function getUserMembershipsUpdateKey() {
  return ['userMemberships.update'] as const
}

export function getUsersActivateKey() {
  return ['users.activate'] as const
}

export function getUsersDeleteKey() {
  return ['users.delete'] as const
}

export function getUsersInfoKey() {
  return ['users.info'] as const
}

export function getUsersInviteKey() {
  return ['users.invite'] as const
}

export function getUsersListKey() {
  return ['users.list'] as const
}

export function getUsersNotificationsSubscribeKey() {
  return ['users.notificationsSubscribe'] as const
}

export function getUsersNotificationsUnsubscribeKey() {
  return ['users.notificationsUnsubscribe'] as const
}

export function getUsersResendInviteKey() {
  return ['users.resendInvite'] as const
}

export function getUsersSuspendKey() {
  return ['users.suspend'] as const
}

export function getUsersUpdateKey() {
  return ['users.update'] as const
}

export function getUsersUpdateRoleKey() {
  return ['users.update_role'] as const
}

export function getViewsListKey() {
  return ['views.list'] as const
}

export function getWebhookSubscriptionsCreateKey() {
  return ['webhookSubscriptions.create'] as const
}

export function getWebhookSubscriptionsDeleteKey() {
  return ['webhookSubscriptions.delete'] as const
}

export function getWebhookSubscriptionsListKey() {
  return ['webhookSubscriptions.list'] as const
}

export function getWebhookSubscriptionsUpdateKey() {
  return ['webhookSubscriptions.update'] as const
}

export function getPostAccessRequestsCreateMutationKey() {
  return ['accessRequests.create', '/accessRequests.create', 'POST'] as const
}

export function getPostAccessRequestsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accessRequests.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['accessRequests.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['accessRequests.create']['$post']>) {
      return parseResponse(client['accessRequests.create'].$post(args, options))
    },
  })
}

export function injectPostAccessRequestsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['accessRequests.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['accessRequests.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessRequestsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAccessRequestsInfoMutationKey() {
  return ['accessRequests.info', '/accessRequests.info', 'POST'] as const
}

export function getPostAccessRequestsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accessRequests.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['accessRequests.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['accessRequests.info']['$post']>) {
      return parseResponse(client['accessRequests.info'].$post(args, options))
    },
  })
}

export function injectPostAccessRequestsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['accessRequests.info']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['accessRequests.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessRequestsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAccessRequestsApproveMutationKey() {
  return ['accessRequests.approve', '/accessRequests.approve', 'POST'] as const
}

export function getPostAccessRequestsApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['accessRequests.approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['accessRequests.approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['accessRequests.approve']['$post']>) {
      return parseResponse(client['accessRequests.approve'].$post(args, options))
    },
  })
}

export function injectPostAccessRequestsApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['accessRequests.approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['accessRequests.approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessRequestsApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAccessRequestsDismissMutationKey() {
  return ['accessRequests.dismiss', '/accessRequests.dismiss', 'POST'] as const
}

export function getPostAccessRequestsDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['accessRequests.dismiss']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['accessRequests.dismiss']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessRequestsDismissMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['accessRequests.dismiss']['$post']>) {
      return parseResponse(client['accessRequests.dismiss'].$post(args, options))
    },
  })
}

export function injectPostAccessRequestsDismiss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['accessRequests.dismiss']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['accessRequests.dismiss']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccessRequestsDismissMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiKeysCreateMutationKey() {
  return ['apiKeys.create', '/apiKeys.create', 'POST'] as const
}

export function getPostApiKeysCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['apiKeys.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['apiKeys.create']['$post']>) {
      return parseResponse(client['apiKeys.create'].$post(args, options))
    },
  })
}

export function injectPostApiKeysCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['apiKeys.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiKeysListMutationKey() {
  return ['apiKeys.list', '/apiKeys.list', 'POST'] as const
}

export function getPostApiKeysListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['apiKeys.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['apiKeys.list']['$post']>) {
      return parseResponse(client['apiKeys.list'].$post(args, options))
    },
  })
}

export function injectPostApiKeysList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['apiKeys.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiKeysDeleteMutationKey() {
  return ['apiKeys.delete', '/apiKeys.delete', 'POST'] as const
}

export function getPostApiKeysDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['apiKeys.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['apiKeys.delete']['$post']>) {
      return parseResponse(client['apiKeys.delete'].$post(args, options))
    },
  })
}

export function injectPostApiKeysDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['apiKeys.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsCreateMutationKey() {
  return ['attachments.create', '/attachments.create', 'POST'] as const
}

export function getPostAttachmentsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attachments.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attachments.create']['$post']>) {
      return parseResponse(client['attachments.create'].$post(args, options))
    },
  })
}

export function injectPostAttachmentsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attachments.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attachments.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachmentsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsRedirectMutationKey() {
  return ['attachments.redirect', '/attachments.redirect', 'POST'] as const
}

export function getPostAttachmentsRedirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.redirect']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attachments.redirect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsRedirectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attachments.redirect']['$post']>) {
      return parseResponse(client['attachments.redirect'].$post(args, options))
    },
  })
}

export function injectPostAttachmentsRedirect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attachments.redirect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attachments.redirect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachmentsRedirectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsDeleteMutationKey() {
  return ['attachments.delete', '/attachments.delete', 'POST'] as const
}

export function getPostAttachmentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attachments.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attachments.delete']['$post']>) {
      return parseResponse(client['attachments.delete'].$post(args, options))
    },
  })
}

export function injectPostAttachmentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attachments.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attachments.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachmentsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsListMutationKey() {
  return ['attachments.list', '/attachments.list', 'POST'] as const
}

export function getPostAttachmentsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['attachments.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['attachments.list']['$post']>) {
      return parseResponse(client['attachments.list'].$post(args, options))
    },
  })
}

export function injectPostAttachmentsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['attachments.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachmentsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAttachmentsCreateFromUrlMutationKey() {
  return ['attachments.createFromUrl', '/attachments.createFromUrl', 'POST'] as const
}

export function getPostAttachmentsCreateFromUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attachments.createFromUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['attachments.createFromUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsCreateFromUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['attachments.createFromUrl']['$post']>,
    ) {
      return parseResponse(client['attachments.createFromUrl'].$post(args, options))
    },
  })
}

export function injectPostAttachmentsCreateFromUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['attachments.createFromUrl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['attachments.createFromUrl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAttachmentsCreateFromUrlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthInfoMutationKey() {
  return ['auth.info', '/auth.info', 'POST'] as const
}

export function getPostAuthInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.info']['$post']>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthInfoMutationKey(),
    async mutationFn() {
      return parseResponse(client['auth.info'].$post(undefined, options))
    },
  })
}

export function injectPostAuthInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.info']['$post']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthConfigMutationKey() {
  return ['auth.config', '/auth.config', 'POST'] as const
}

export function getPostAuthConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.config']['$post']>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client['auth.config'].$post(undefined, options))
    },
  })
}

export function injectPostAuthConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.config']['$post']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthDeleteMutationKey() {
  return ['auth.delete', '/auth.delete', 'POST'] as const
}

export function getPostAuthDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.delete']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['auth.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['auth.delete']['$post']>) {
      return parseResponse(client['auth.delete'].$post(args, options))
    },
  })
}

export function injectPostAuthDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['auth.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsInfoMutationKey() {
  return ['collections.info', '/collections.info', 'POST'] as const
}

export function getPostCollectionsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.info']['$post']>) {
      return parseResponse(client['collections.info'].$post(args, options))
    },
  })
}

export function injectPostCollectionsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsDocumentsMutationKey() {
  return ['collections.documents', '/collections.documents', 'POST'] as const
}

export function getPostCollectionsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.documents']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.documents']['$post']>) {
      return parseResponse(client['collections.documents'].$post(args, options))
    },
  })
}

export function injectPostCollectionsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsListMutationKey() {
  return ['collections.list', '/collections.list', 'POST'] as const
}

export function getPostCollectionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.list']['$post']>) {
      return parseResponse(client['collections.list'].$post(args, options))
    },
  })
}

export function injectPostCollectionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsCreateMutationKey() {
  return ['collections.create', '/collections.create', 'POST'] as const
}

export function getPostCollectionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.create']['$post']>) {
      return parseResponse(client['collections.create'].$post(args, options))
    },
  })
}

export function injectPostCollectionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsDuplicateMutationKey() {
  return ['collections.duplicate', '/collections.duplicate', 'POST'] as const
}

export function getPostCollectionsDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.duplicate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsDuplicateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.duplicate']['$post']>) {
      return parseResponse(client['collections.duplicate'].$post(args, options))
    },
  })
}

export function injectPostCollectionsDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsUpdateMutationKey() {
  return ['collections.update', '/collections.update', 'POST'] as const
}

export function getPostCollectionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.update']['$post']>) {
      return parseResponse(client['collections.update'].$post(args, options))
    },
  })
}

export function injectPostCollectionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsAddUserMutationKey() {
  return ['collections.add_user', '/collections.add_user', 'POST'] as const
}

export function getPostCollectionsAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.add_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.add_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsAddUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.add_user']['$post']>) {
      return parseResponse(client['collections.add_user'].$post(args, options))
    },
  })
}

export function injectPostCollectionsAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.add_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.add_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsAddUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsRemoveUserMutationKey() {
  return ['collections.remove_user', '/collections.remove_user', 'POST'] as const
}

export function getPostCollectionsRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.remove_user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.remove_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsRemoveUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.remove_user']['$post']>) {
      return parseResponse(client['collections.remove_user'].$post(args, options))
    },
  })
}

export function injectPostCollectionsRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.remove_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.remove_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsRemoveUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsMembershipsMutationKey() {
  return ['collections.memberships', '/collections.memberships', 'POST'] as const
}

export function getPostCollectionsMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.memberships']['$post']>) {
      return parseResponse(client['collections.memberships'].$post(args, options))
    },
  })
}

export function injectPostCollectionsMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.memberships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsAddGroupMutationKey() {
  return ['collections.add_group', '/collections.add_group', 'POST'] as const
}

export function getPostCollectionsAddGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.add_group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.add_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsAddGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.add_group']['$post']>) {
      return parseResponse(client['collections.add_group'].$post(args, options))
    },
  })
}

export function injectPostCollectionsAddGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.add_group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.add_group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsAddGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsRemoveGroupMutationKey() {
  return ['collections.remove_group', '/collections.remove_group', 'POST'] as const
}

export function getPostCollectionsRemoveGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.remove_group']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.remove_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsRemoveGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.remove_group']['$post']>) {
      return parseResponse(client['collections.remove_group'].$post(args, options))
    },
  })
}

export function injectPostCollectionsRemoveGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.remove_group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.remove_group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsRemoveGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsGroupMembershipsMutationKey() {
  return ['collections.group_memberships', '/collections.group_memberships', 'POST'] as const
}

export function getPostCollectionsGroupMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.group_memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.group_memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsGroupMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['collections.group_memberships']['$post']>,
    ) {
      return parseResponse(client['collections.group_memberships'].$post(args, options))
    },
  })
}

export function injectPostCollectionsGroupMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.group_memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.group_memberships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsGroupMembershipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsDeleteMutationKey() {
  return ['collections.delete', '/collections.delete', 'POST'] as const
}

export function getPostCollectionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.delete']['$post']>) {
      return parseResponse(client['collections.delete'].$post(args, options))
    },
  })
}

export function injectPostCollectionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsExportMutationKey() {
  return ['collections.export', '/collections.export', 'POST'] as const
}

export function getPostCollectionsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.export']['$post']>) {
      return parseResponse(client['collections.export'].$post(args, options))
    },
  })
}

export function injectPostCollectionsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsExportAllMutationKey() {
  return ['collections.export_all', '/collections.export_all', 'POST'] as const
}

export function getPostCollectionsExportAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.export_all']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.export_all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsExportAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.export_all']['$post']>) {
      return parseResponse(client['collections.export_all'].$post(args, options))
    },
  })
}

export function injectPostCollectionsExportAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.export_all']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.export_all']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsExportAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsArchiveMutationKey() {
  return ['collections.archive', '/collections.archive', 'POST'] as const
}

export function getPostCollectionsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.archive']['$post']>) {
      return parseResponse(client['collections.archive'].$post(args, options))
    },
  })
}

export function injectPostCollectionsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsRestoreMutationKey() {
  return ['collections.restore', '/collections.restore', 'POST'] as const
}

export function getPostCollectionsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.restore']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.restore']['$post']>) {
      return parseResponse(client['collections.restore'].$post(args, options))
    },
  })
}

export function injectPostCollectionsRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsMoveMutationKey() {
  return ['collections.move', '/collections.move', 'POST'] as const
}

export function getPostCollectionsMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.move']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.move']['$post']>) {
      return parseResponse(client['collections.move'].$post(args, options))
    },
  })
}

export function injectPostCollectionsMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.move']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCollectionsImportMutationKey() {
  return ['collections.import', '/collections.import', 'POST'] as const
}

export function getPostCollectionsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.import']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['collections.import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['collections.import']['$post']>) {
      return parseResponse(client['collections.import'].$post(args, options))
    },
  })
}

export function injectPostCollectionsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['collections.import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['collections.import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsCreateMutationKey() {
  return ['comments.create', '/comments.create', 'POST'] as const
}

export function getPostCommentsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.create']['$post']>) {
      return parseResponse(client['comments.create'].$post(args, options))
    },
  })
}

export function injectPostCommentsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsInfoMutationKey() {
  return ['comments.info', '/comments.info', 'POST'] as const
}

export function getPostCommentsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.info']['$post']>) {
      return parseResponse(client['comments.info'].$post(args, options))
    },
  })
}

export function injectPostCommentsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsUpdateMutationKey() {
  return ['comments.update', '/comments.update', 'POST'] as const
}

export function getPostCommentsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.update']['$post']>) {
      return parseResponse(client['comments.update'].$post(args, options))
    },
  })
}

export function injectPostCommentsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsDeleteMutationKey() {
  return ['comments.delete', '/comments.delete', 'POST'] as const
}

export function getPostCommentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.delete']['$post']>) {
      return parseResponse(client['comments.delete'].$post(args, options))
    },
  })
}

export function injectPostCommentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsListMutationKey() {
  return ['comments.list', '/comments.list', 'POST'] as const
}

export function getPostCommentsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.list']['$post']>) {
      return parseResponse(client['comments.list'].$post(args, options))
    },
  })
}

export function injectPostCommentsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsResolveMutationKey() {
  return ['comments.resolve', '/comments.resolve', 'POST'] as const
}

export function getPostCommentsResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.resolve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.resolve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsResolveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.resolve']['$post']>) {
      return parseResponse(client['comments.resolve'].$post(args, options))
    },
  })
}

export function injectPostCommentsResolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.resolve']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.resolve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsResolveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsUnresolveMutationKey() {
  return ['comments.unresolve', '/comments.unresolve', 'POST'] as const
}

export function getPostCommentsUnresolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.unresolve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.unresolve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsUnresolveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.unresolve']['$post']>) {
      return parseResponse(client['comments.unresolve'].$post(args, options))
    },
  })
}

export function injectPostCommentsUnresolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['comments.unresolve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.unresolve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsUnresolveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsAddReactionMutationKey() {
  return ['comments.add_reaction', '/comments.add_reaction', 'POST'] as const
}

export function getPostCommentsAddReactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.add_reaction']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.add_reaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsAddReactionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.add_reaction']['$post']>) {
      return parseResponse(client['comments.add_reaction'].$post(args, options))
    },
  })
}

export function injectPostCommentsAddReaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['comments.add_reaction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.add_reaction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsAddReactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCommentsRemoveReactionMutationKey() {
  return ['comments.remove_reaction', '/comments.remove_reaction', 'POST'] as const
}

export function getPostCommentsRemoveReactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['comments.remove_reaction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['comments.remove_reaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsRemoveReactionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['comments.remove_reaction']['$post']>) {
      return parseResponse(client['comments.remove_reaction'].$post(args, options))
    },
  })
}

export function injectPostCommentsRemoveReaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['comments.remove_reaction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['comments.remove_reaction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsRemoveReactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDataAttributesInfoMutationKey() {
  return ['dataAttributes.info', '/dataAttributes.info', 'POST'] as const
}

export function getPostDataAttributesInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dataAttributes.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dataAttributes.info']['$post']>) {
      return parseResponse(client['dataAttributes.info'].$post(args, options))
    },
  })
}

export function injectPostDataAttributesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataAttributes.info']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dataAttributes.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataAttributesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDataAttributesListMutationKey() {
  return ['dataAttributes.list', '/dataAttributes.list', 'POST'] as const
}

export function getPostDataAttributesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dataAttributes.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dataAttributes.list']['$post']>) {
      return parseResponse(client['dataAttributes.list'].$post(args, options))
    },
  })
}

export function injectPostDataAttributesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataAttributes.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dataAttributes.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataAttributesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDataAttributesCreateMutationKey() {
  return ['dataAttributes.create', '/dataAttributes.create', 'POST'] as const
}

export function getPostDataAttributesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dataAttributes.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dataAttributes.create']['$post']>) {
      return parseResponse(client['dataAttributes.create'].$post(args, options))
    },
  })
}

export function injectPostDataAttributesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataAttributes.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dataAttributes.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataAttributesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDataAttributesUpdateMutationKey() {
  return ['dataAttributes.update', '/dataAttributes.update', 'POST'] as const
}

export function getPostDataAttributesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dataAttributes.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dataAttributes.update']['$post']>) {
      return parseResponse(client['dataAttributes.update'].$post(args, options))
    },
  })
}

export function injectPostDataAttributesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataAttributes.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dataAttributes.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataAttributesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDataAttributesDeleteMutationKey() {
  return ['dataAttributes.delete', '/dataAttributes.delete', 'POST'] as const
}

export function getPostDataAttributesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['dataAttributes.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDataAttributesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['dataAttributes.delete']['$post']>) {
      return parseResponse(client['dataAttributes.delete'].$post(args, options))
    },
  })
}

export function injectPostDataAttributesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataAttributes.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['dataAttributes.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDataAttributesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsInfoMutationKey() {
  return ['documents.info', '/documents.info', 'POST'] as const
}

export function getPostDocumentsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.info']['$post']>) {
      return parseResponse(client['documents.info'].$post(args, options))
    },
  })
}

export function injectPostDocumentsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsInsightsMutationKey() {
  return ['documents.insights', '/documents.insights', 'POST'] as const
}

export function getPostDocumentsInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.insights']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.insights']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsInsightsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.insights']['$post']>) {
      return parseResponse(client['documents.insights'].$post(args, options))
    },
  })
}

export function injectPostDocumentsInsights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.insights']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.insights']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsInsightsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsImportMutationKey() {
  return ['documents.import', '/documents.import', 'POST'] as const
}

export function getPostDocumentsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.import']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.import']['$post']>) {
      return parseResponse(client['documents.import'].$post(args, options))
    },
  })
}

export function injectPostDocumentsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.import']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsExportMutationKey() {
  return ['documents.export', '/documents.export', 'POST'] as const
}

export function getPostDocumentsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.export']['$post']>) {
      return parseResponse(client['documents.export'].$post(args, options))
    },
  })
}

export function injectPostDocumentsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.export']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsListMutationKey() {
  return ['documents.list', '/documents.list', 'POST'] as const
}

export function getPostDocumentsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.list']['$post']>) {
      return parseResponse(client['documents.list'].$post(args, options))
    },
  })
}

export function injectPostDocumentsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsDocumentsMutationKey() {
  return ['documents.documents', '/documents.documents', 'POST'] as const
}

export function getPostDocumentsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.documents']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.documents']['$post']>) {
      return parseResponse(client['documents.documents'].$post(args, options))
    },
  })
}

export function injectPostDocumentsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.documents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsDraftsMutationKey() {
  return ['documents.drafts', '/documents.drafts', 'POST'] as const
}

export function getPostDocumentsDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.drafts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDraftsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.drafts']['$post']>) {
      return parseResponse(client['documents.drafts'].$post(args, options))
    },
  })
}

export function injectPostDocumentsDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.drafts']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.drafts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsDraftsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsViewedMutationKey() {
  return ['documents.viewed', '/documents.viewed', 'POST'] as const
}

export function getPostDocumentsViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.viewed']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.viewed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsViewedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.viewed']['$post']>) {
      return parseResponse(client['documents.viewed'].$post(args, options))
    },
  })
}

export function injectPostDocumentsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.viewed']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.viewed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsViewedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsAnswerQuestionMutationKey() {
  return ['documents.answerQuestion', '/documents.answerQuestion', 'POST'] as const
}

export function getPostDocumentsAnswerQuestionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.answerQuestion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.answerQuestion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsAnswerQuestionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.answerQuestion']['$post']>) {
      return parseResponse(client['documents.answerQuestion'].$post(args, options))
    },
  })
}

export function injectPostDocumentsAnswerQuestion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.answerQuestion']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.answerQuestion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsAnswerQuestionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsSearchTitlesMutationKey() {
  return ['documents.search_titles', '/documents.search_titles', 'POST'] as const
}

export function getPostDocumentsSearchTitlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.search_titles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.search_titles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsSearchTitlesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.search_titles']['$post']>) {
      return parseResponse(client['documents.search_titles'].$post(args, options))
    },
  })
}

export function injectPostDocumentsSearchTitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.search_titles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.search_titles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsSearchTitlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsSearchMutationKey() {
  return ['documents.search', '/documents.search', 'POST'] as const
}

export function getPostDocumentsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.search']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsSearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.search']['$post']>) {
      return parseResponse(client['documents.search'].$post(args, options))
    },
  })
}

export function injectPostDocumentsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.search']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsCreateMutationKey() {
  return ['documents.create', '/documents.create', 'POST'] as const
}

export function getPostDocumentsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.create']['$post']>) {
      return parseResponse(client['documents.create'].$post(args, options))
    },
  })
}

export function injectPostDocumentsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsUpdateMutationKey() {
  return ['documents.update', '/documents.update', 'POST'] as const
}

export function getPostDocumentsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.update']['$post']>) {
      return parseResponse(client['documents.update'].$post(args, options))
    },
  })
}

export function injectPostDocumentsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsTemplatizeMutationKey() {
  return ['documents.templatize', '/documents.templatize', 'POST'] as const
}

export function getPostDocumentsTemplatizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.templatize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.templatize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsTemplatizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.templatize']['$post']>) {
      return parseResponse(client['documents.templatize'].$post(args, options))
    },
  })
}

export function injectPostDocumentsTemplatize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.templatize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.templatize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsTemplatizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsUnpublishMutationKey() {
  return ['documents.unpublish', '/documents.unpublish', 'POST'] as const
}

export function getPostDocumentsUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.unpublish']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.unpublish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsUnpublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.unpublish']['$post']>) {
      return parseResponse(client['documents.unpublish'].$post(args, options))
    },
  })
}

export function injectPostDocumentsUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.unpublish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.unpublish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsUnpublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsMoveMutationKey() {
  return ['documents.move', '/documents.move', 'POST'] as const
}

export function getPostDocumentsMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.move']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.move']['$post']>) {
      return parseResponse(client['documents.move'].$post(args, options))
    },
  })
}

export function injectPostDocumentsMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.move']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsArchiveMutationKey() {
  return ['documents.archive', '/documents.archive', 'POST'] as const
}

export function getPostDocumentsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.archive']['$post']>) {
      return parseResponse(client['documents.archive'].$post(args, options))
    },
  })
}

export function injectPostDocumentsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.archive']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsRestoreMutationKey() {
  return ['documents.restore', '/documents.restore', 'POST'] as const
}

export function getPostDocumentsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.restore']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.restore']['$post']>) {
      return parseResponse(client['documents.restore'].$post(args, options))
    },
  })
}

export function injectPostDocumentsRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.restore']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsDeleteMutationKey() {
  return ['documents.delete', '/documents.delete', 'POST'] as const
}

export function getPostDocumentsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.delete']['$post']>) {
      return parseResponse(client['documents.delete'].$post(args, options))
    },
  })
}

export function injectPostDocumentsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsUsersMutationKey() {
  return ['documents.users', '/documents.users', 'POST'] as const
}

export function getPostDocumentsUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.users']['$post']>) {
      return parseResponse(client['documents.users'].$post(args, options))
    },
  })
}

export function injectPostDocumentsUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.users']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsMembershipsMutationKey() {
  return ['documents.memberships', '/documents.memberships', 'POST'] as const
}

export function getPostDocumentsMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.memberships']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.memberships']['$post']>) {
      return parseResponse(client['documents.memberships'].$post(args, options))
    },
  })
}

export function injectPostDocumentsMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.memberships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsAddUserMutationKey() {
  return ['documents.add_user', '/documents.add_user', 'POST'] as const
}

export function getPostDocumentsAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.add_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.add_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsAddUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.add_user']['$post']>) {
      return parseResponse(client['documents.add_user'].$post(args, options))
    },
  })
}

export function injectPostDocumentsAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.add_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.add_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsAddUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsRemoveUserMutationKey() {
  return ['documents.remove_user', '/documents.remove_user', 'POST'] as const
}

export function getPostDocumentsRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.remove_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.remove_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsRemoveUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.remove_user']['$post']>) {
      return parseResponse(client['documents.remove_user'].$post(args, options))
    },
  })
}

export function injectPostDocumentsRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.remove_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.remove_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsRemoveUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsArchivedMutationKey() {
  return ['documents.archived', '/documents.archived', 'POST'] as const
}

export function getPostDocumentsArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.archived']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.archived']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsArchivedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.archived']['$post']>) {
      return parseResponse(client['documents.archived'].$post(args, options))
    },
  })
}

export function injectPostDocumentsArchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.archived']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.archived']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsArchivedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsDeletedMutationKey() {
  return ['documents.deleted', '/documents.deleted', 'POST'] as const
}

export function getPostDocumentsDeletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.deleted']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.deleted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDeletedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.deleted']['$post']>) {
      return parseResponse(client['documents.deleted'].$post(args, options))
    },
  })
}

export function injectPostDocumentsDeleted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.deleted']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.deleted']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsDeletedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsDuplicateMutationKey() {
  return ['documents.duplicate', '/documents.duplicate', 'POST'] as const
}

export function getPostDocumentsDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.duplicate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsDuplicateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.duplicate']['$post']>) {
      return parseResponse(client['documents.duplicate'].$post(args, options))
    },
  })
}

export function injectPostDocumentsDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsAddGroupMutationKey() {
  return ['documents.add_group', '/documents.add_group', 'POST'] as const
}

export function getPostDocumentsAddGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.add_group']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.add_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsAddGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.add_group']['$post']>) {
      return parseResponse(client['documents.add_group'].$post(args, options))
    },
  })
}

export function injectPostDocumentsAddGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.add_group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.add_group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsAddGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsRemoveGroupMutationKey() {
  return ['documents.remove_group', '/documents.remove_group', 'POST'] as const
}

export function getPostDocumentsRemoveGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.remove_group']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.remove_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsRemoveGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['documents.remove_group']['$post']>) {
      return parseResponse(client['documents.remove_group'].$post(args, options))
    },
  })
}

export function injectPostDocumentsRemoveGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.remove_group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.remove_group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsRemoveGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsGroupMembershipsMutationKey() {
  return ['documents.group_memberships', '/documents.group_memberships', 'POST'] as const
}

export function getPostDocumentsGroupMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.group_memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['documents.group_memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsGroupMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['documents.group_memberships']['$post']>,
    ) {
      return parseResponse(client['documents.group_memberships'].$post(args, options))
    },
  })
}

export function injectPostDocumentsGroupMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.group_memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['documents.group_memberships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsGroupMembershipsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDocumentsEmptyTrashMutationKey() {
  return ['documents.empty_trash', '/documents.empty_trash', 'POST'] as const
}

export function getPostDocumentsEmptyTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.empty_trash']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsEmptyTrashMutationKey(),
    async mutationFn() {
      return parseResponse(client['documents.empty_trash'].$post(undefined, options))
    },
  })
}

export function injectPostDocumentsEmptyTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['documents.empty_trash']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsEmptyTrashMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEventsListMutationKey() {
  return ['events.list', '/events.list', 'POST'] as const
}

export function getPostEventsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['events.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['events.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['events.list']['$post']>) {
      return parseResponse(client['events.list'].$post(args, options))
    },
  })
}

export function injectPostEventsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['events.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['events.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileOperationsInfoMutationKey() {
  return ['fileOperations.info', '/fileOperations.info', 'POST'] as const
}

export function getPostFileOperationsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['fileOperations.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileOperationsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fileOperations.info']['$post']>) {
      return parseResponse(client['fileOperations.info'].$post(args, options))
    },
  })
}

export function injectPostFileOperationsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fileOperations.info']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['fileOperations.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileOperationsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileOperationsDeleteMutationKey() {
  return ['fileOperations.delete', '/fileOperations.delete', 'POST'] as const
}

export function getPostFileOperationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['fileOperations.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileOperationsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fileOperations.delete']['$post']>) {
      return parseResponse(client['fileOperations.delete'].$post(args, options))
    },
  })
}

export function injectPostFileOperationsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fileOperations.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['fileOperations.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileOperationsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileOperationsRedirectMutationKey() {
  return ['fileOperations.redirect', '/fileOperations.redirect', 'POST'] as const
}

export function getPostFileOperationsRedirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fileOperations.redirect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['fileOperations.redirect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileOperationsRedirectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fileOperations.redirect']['$post']>) {
      return parseResponse(client['fileOperations.redirect'].$post(args, options))
    },
  })
}

export function injectPostFileOperationsRedirect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fileOperations.redirect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['fileOperations.redirect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileOperationsRedirectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFileOperationsListMutationKey() {
  return ['fileOperations.list', '/fileOperations.list', 'POST'] as const
}

export function getPostFileOperationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['fileOperations.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFileOperationsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['fileOperations.list']['$post']>) {
      return parseResponse(client['fileOperations.list'].$post(args, options))
    },
  })
}

export function injectPostFileOperationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['fileOperations.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['fileOperations.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFileOperationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupMembershipsListMutationKey() {
  return ['groupMemberships.list', '/groupMemberships.list', 'POST'] as const
}

export function getPostGroupMembershipsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groupMemberships.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groupMemberships.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupMembershipsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groupMemberships.list']['$post']>) {
      return parseResponse(client['groupMemberships.list'].$post(args, options))
    },
  })
}

export function injectPostGroupMembershipsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['groupMemberships.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['groupMemberships.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupMembershipsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsInfoMutationKey() {
  return ['groups.info', '/groups.info', 'POST'] as const
}

export function getPostGroupsInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.info']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['groups.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.info']['$post']>) {
      return parseResponse(client['groups.info'].$post(args, options))
    },
  })
}

export function injectPostGroupsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsListMutationKey() {
  return ['groups.list', '/groups.list', 'POST'] as const
}

export function getPostGroupsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['groups.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.list']['$post']>) {
      return parseResponse(client['groups.list'].$post(args, options))
    },
  })
}

export function injectPostGroupsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsCreateMutationKey() {
  return ['groups.create', '/groups.create', 'POST'] as const
}

export function getPostGroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.create']['$post']>) {
      return parseResponse(client['groups.create'].$post(args, options))
    },
  })
}

export function injectPostGroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsUpdateMutationKey() {
  return ['groups.update', '/groups.update', 'POST'] as const
}

export function getPostGroupsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.update']['$post']>) {
      return parseResponse(client['groups.update'].$post(args, options))
    },
  })
}

export function injectPostGroupsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsDeleteMutationKey() {
  return ['groups.delete', '/groups.delete', 'POST'] as const
}

export function getPostGroupsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.delete']['$post']>) {
      return parseResponse(client['groups.delete'].$post(args, options))
    },
  })
}

export function injectPostGroupsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsMembershipsMutationKey() {
  return ['groups.memberships', '/groups.memberships', 'POST'] as const
}

export function getPostGroupsMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.memberships']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.memberships']['$post']>) {
      return parseResponse(client['groups.memberships'].$post(args, options))
    },
  })
}

export function injectPostGroupsMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['groups.memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.memberships']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsAddUserMutationKey() {
  return ['groups.add_user', '/groups.add_user', 'POST'] as const
}

export function getPostGroupsAddUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.add_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.add_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsAddUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.add_user']['$post']>) {
      return parseResponse(client['groups.add_user'].$post(args, options))
    },
  })
}

export function injectPostGroupsAddUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.add_user']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.add_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsAddUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsRemoveUserMutationKey() {
  return ['groups.remove_user', '/groups.remove_user', 'POST'] as const
}

export function getPostGroupsRemoveUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.remove_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.remove_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsRemoveUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.remove_user']['$post']>) {
      return parseResponse(client['groups.remove_user'].$post(args, options))
    },
  })
}

export function injectPostGroupsRemoveUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['groups.remove_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.remove_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsRemoveUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGroupsUpdateUserMutationKey() {
  return ['groups.update_user', '/groups.update_user', 'POST'] as const
}

export function getPostGroupsUpdateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.update_user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['groups.update_user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsUpdateUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups.update_user']['$post']>) {
      return parseResponse(client['groups.update_user'].$post(args, options))
    },
  })
}

export function injectPostGroupsUpdateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['groups.update_user']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['groups.update_user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsUpdateUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNotificationsListMutationKey() {
  return ['notifications.list', '/notifications.list', 'POST'] as const
}

export function getPostNotificationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['notifications.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['notifications.list']['$post']>) {
      return parseResponse(client['notifications.list'].$post(args, options))
    },
  })
}

export function injectPostNotificationsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notifications.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['notifications.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNotificationsUpdateMutationKey() {
  return ['notifications.update', '/notifications.update', 'POST'] as const
}

export function getPostNotificationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['notifications.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['notifications.update']['$post']>) {
      return parseResponse(client['notifications.update'].$post(args, options))
    },
  })
}

export function injectPostNotificationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notifications.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['notifications.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostNotificationsUpdateAllMutationKey() {
  return ['notifications.update_all', '/notifications.update_all', 'POST'] as const
}

export function getPostNotificationsUpdateAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['notifications.update_all']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['notifications.update_all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsUpdateAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['notifications.update_all']['$post']>) {
      return parseResponse(client['notifications.update_all'].$post(args, options))
    },
  })
}

export function injectPostNotificationsUpdateAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['notifications.update_all']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['notifications.update_all']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsUpdateAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthAuthenticationsListMutationKey() {
  return ['oauthAuthentications.list', '/oauthAuthentications.list', 'POST'] as const
}

export function getPostOauthAuthenticationsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthAuthentications.list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthAuthentications.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthenticationsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['oauthAuthentications.list']['$post']>,
    ) {
      return parseResponse(client['oauthAuthentications.list'].$post(args, options))
    },
  })
}

export function injectPostOauthAuthenticationsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthAuthentications.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthAuthentications.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthAuthenticationsListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthAuthenticationsDeleteMutationKey() {
  return ['oauthAuthentications.delete', '/oauthAuthentications.delete', 'POST'] as const
}

export function getPostOauthAuthenticationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthAuthentications.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthenticationsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']>,
    ) {
      return parseResponse(client['oauthAuthentications.delete'].$post(args, options))
    },
  })
}

export function injectPostOauthAuthenticationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthAuthentications.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthAuthenticationsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsInfoMutationKey() {
  return ['oauthClients.info', '/oauthClients.info', 'POST'] as const
}

export function getPostOauthClientsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['oauthClients.info']['$post']>) {
      return parseResponse(client['oauthClients.info'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsListMutationKey() {
  return ['oauthClients.list', '/oauthClients.list', 'POST'] as const
}

export function getPostOauthClientsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['oauthClients.list']['$post']>) {
      return parseResponse(client['oauthClients.list'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsCreateMutationKey() {
  return ['oauthClients.create', '/oauthClients.create', 'POST'] as const
}

export function getPostOauthClientsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['oauthClients.create']['$post']>) {
      return parseResponse(client['oauthClients.create'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthClients.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsUpdateMutationKey() {
  return ['oauthClients.update', '/oauthClients.update', 'POST'] as const
}

export function getPostOauthClientsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['oauthClients.update']['$post']>) {
      return parseResponse(client['oauthClients.update'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthClients.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsRotateSecretMutationKey() {
  return ['oauthClients.rotate_secret', '/oauthClients.rotate_secret', 'POST'] as const
}

export function getPostOauthClientsRotateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthClients.rotate_secret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsRotateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']>,
    ) {
      return parseResponse(client['oauthClients.rotate_secret'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsRotateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthClients.rotate_secret']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsRotateSecretMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthClientsDeleteMutationKey() {
  return ['oauthClients.delete', '/oauthClients.delete', 'POST'] as const
}

export function getPostOauthClientsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['oauthClients.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthClientsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['oauthClients.delete']['$post']>) {
      return parseResponse(client['oauthClients.delete'].$post(args, options))
    },
  })
}

export function injectPostOauthClientsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['oauthClients.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['oauthClients.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthClientsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsCreateMutationKey() {
  return ['pins.create', '/pins.create', 'POST'] as const
}

export function getPostPinsCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.create']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.create']['$post']>) {
      return parseResponse(client['pins.create'].$post(args, options))
    },
  })
}

export function injectPostPinsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsInfoMutationKey() {
  return ['pins.info', '/pins.info', 'POST'] as const
}

export function getPostPinsInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.info']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.info']['$post']>) {
      return parseResponse(client['pins.info'].$post(args, options))
    },
  })
}

export function injectPostPinsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsListMutationKey() {
  return ['pins.list', '/pins.list', 'POST'] as const
}

export function getPostPinsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.list']['$post']>) {
      return parseResponse(client['pins.list'].$post(args, options))
    },
  })
}

export function injectPostPinsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsUpdateMutationKey() {
  return ['pins.update', '/pins.update', 'POST'] as const
}

export function getPostPinsUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.update']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.update']['$post']>) {
      return parseResponse(client['pins.update'].$post(args, options))
    },
  })
}

export function injectPostPinsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPinsDeleteMutationKey() {
  return ['pins.delete', '/pins.delete', 'POST'] as const
}

export function getPostPinsDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.delete']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['pins.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPinsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['pins.delete']['$post']>) {
      return parseResponse(client['pins.delete'].$post(args, options))
    },
  })
}

export function injectPostPinsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['pins.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPinsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostReactionsListMutationKey() {
  return ['reactions.list', '/reactions.list', 'POST'] as const
}

export function getPostReactionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reactions.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReactionsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reactions.list']['$post']>) {
      return parseResponse(client['reactions.list'].$post(args, options))
    },
  })
}

export function injectPostReactionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['reactions.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReactionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRevisionsInfoMutationKey() {
  return ['revisions.info', '/revisions.info', 'POST'] as const
}

export function getPostRevisionsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['revisions.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRevisionsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['revisions.info']['$post']>) {
      return parseResponse(client['revisions.info'].$post(args, options))
    },
  })
}

export function injectPostRevisionsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['revisions.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRevisionsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRevisionsListMutationKey() {
  return ['revisions.list', '/revisions.list', 'POST'] as const
}

export function getPostRevisionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['revisions.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRevisionsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['revisions.list']['$post']>) {
      return parseResponse(client['revisions.list'].$post(args, options))
    },
  })
}

export function injectPostRevisionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['revisions.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRevisionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRevisionsUpdateMutationKey() {
  return ['revisions.update', '/revisions.update', 'POST'] as const
}

export function getPostRevisionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['revisions.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRevisionsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['revisions.update']['$post']>) {
      return parseResponse(client['revisions.update'].$post(args, options))
    },
  })
}

export function injectPostRevisionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['revisions.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRevisionsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRevisionsDeleteMutationKey() {
  return ['revisions.delete', '/revisions.delete', 'POST'] as const
}

export function getPostRevisionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['revisions.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRevisionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['revisions.delete']['$post']>) {
      return parseResponse(client['revisions.delete'].$post(args, options))
    },
  })
}

export function injectPostRevisionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['revisions.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRevisionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRevisionsExportMutationKey() {
  return ['revisions.export', '/revisions.export', 'POST'] as const
}

export function getPostRevisionsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['revisions.export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRevisionsExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['revisions.export']['$post']>) {
      return parseResponse(client['revisions.export'].$post(args, options))
    },
  })
}

export function injectPostRevisionsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.export']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['revisions.export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRevisionsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesInfoMutationKey() {
  return ['shares.info', '/shares.info', 'POST'] as const
}

export function getPostSharesInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.info']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['shares.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shares.info']['$post']>) {
      return parseResponse(client['shares.info'].$post(args, options))
    },
  })
}

export function injectPostSharesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['shares.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSharesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesListMutationKey() {
  return ['shares.list', '/shares.list', 'POST'] as const
}

export function getPostSharesListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['shares.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shares.list']['$post']>) {
      return parseResponse(client['shares.list'].$post(args, options))
    },
  })
}

export function injectPostSharesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['shares.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSharesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesCreateMutationKey() {
  return ['shares.create', '/shares.create', 'POST'] as const
}

export function getPostSharesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shares.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shares.create']['$post']>) {
      return parseResponse(client['shares.create'].$post(args, options))
    },
  })
}

export function injectPostSharesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['shares.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSharesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesUpdateMutationKey() {
  return ['shares.update', '/shares.update', 'POST'] as const
}

export function getPostSharesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shares.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shares.update']['$post']>) {
      return parseResponse(client['shares.update'].$post(args, options))
    },
  })
}

export function injectPostSharesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['shares.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSharesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesRevokeMutationKey() {
  return ['shares.revoke', '/shares.revoke', 'POST'] as const
}

export function getPostSharesRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.revoke']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shares.revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesRevokeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shares.revoke']['$post']>) {
      return parseResponse(client['shares.revoke'].$post(args, options))
    },
  })
}

export function injectPostSharesRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.revoke']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['shares.revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSharesRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStarsCreateMutationKey() {
  return ['stars.create', '/stars.create', 'POST'] as const
}

export function getPostStarsCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['stars.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.create']['$post']>) {
      return parseResponse(client['stars.create'].$post(args, options))
    },
  })
}

export function injectPostStarsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStarsListMutationKey() {
  return ['stars.list', '/stars.list', 'POST'] as const
}

export function getPostStarsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['stars.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.list']['$post']>) {
      return parseResponse(client['stars.list'].$post(args, options))
    },
  })
}

export function injectPostStarsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStarsUpdateMutationKey() {
  return ['stars.update', '/stars.update', 'POST'] as const
}

export function getPostStarsUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['stars.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.update']['$post']>) {
      return parseResponse(client['stars.update'].$post(args, options))
    },
  })
}

export function injectPostStarsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStarsDeleteMutationKey() {
  return ['stars.delete', '/stars.delete', 'POST'] as const
}

export function getPostStarsDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['stars.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStarsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stars.delete']['$post']>) {
      return parseResponse(client['stars.delete'].$post(args, options))
    },
  })
}

export function injectPostStarsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stars.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStarsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubscriptionsListMutationKey() {
  return ['subscriptions.list', '/subscriptions.list', 'POST'] as const
}

export function getPostSubscriptionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['subscriptions.list']['$post']>) {
      return parseResponse(client['subscriptions.list'].$post(args, options))
    },
  })
}

export function injectPostSubscriptionsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubscriptionsInfoMutationKey() {
  return ['subscriptions.info', '/subscriptions.info', 'POST'] as const
}

export function getPostSubscriptionsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['subscriptions.info']['$post']>) {
      return parseResponse(client['subscriptions.info'].$post(args, options))
    },
  })
}

export function injectPostSubscriptionsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions.info']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubscriptionsCreateMutationKey() {
  return ['subscriptions.create', '/subscriptions.create', 'POST'] as const
}

export function getPostSubscriptionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['subscriptions.create']['$post']>) {
      return parseResponse(client['subscriptions.create'].$post(args, options))
    },
  })
}

export function injectPostSubscriptionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubscriptionsDeleteMutationKey() {
  return ['subscriptions.delete', '/subscriptions.delete', 'POST'] as const
}

export function getPostSubscriptionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscriptions.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['subscriptions.delete']['$post']>) {
      return parseResponse(client['subscriptions.delete'].$post(args, options))
    },
  })
}

export function injectPostSubscriptionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['subscriptions.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['subscriptions.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSubscriptionsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesCreateMutationKey() {
  return ['templates.create', '/templates.create', 'POST'] as const
}

export function getPostTemplatesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.create']['$post']>) {
      return parseResponse(client['templates.create'].$post(args, options))
    },
  })
}

export function injectPostTemplatesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.create']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesListMutationKey() {
  return ['templates.list', '/templates.list', 'POST'] as const
}

export function getPostTemplatesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.list']['$post']>) {
      return parseResponse(client['templates.list'].$post(args, options))
    },
  })
}

export function injectPostTemplatesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesInfoMutationKey() {
  return ['templates.info', '/templates.info', 'POST'] as const
}

export function getPostTemplatesInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.info']['$post']>) {
      return parseResponse(client['templates.info'].$post(args, options))
    },
  })
}

export function injectPostTemplatesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesUpdateMutationKey() {
  return ['templates.update', '/templates.update', 'POST'] as const
}

export function getPostTemplatesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.update']['$post']>) {
      return parseResponse(client['templates.update'].$post(args, options))
    },
  })
}

export function injectPostTemplatesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesDeleteMutationKey() {
  return ['templates.delete', '/templates.delete', 'POST'] as const
}

export function getPostTemplatesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.delete']['$post']>) {
      return parseResponse(client['templates.delete'].$post(args, options))
    },
  })
}

export function injectPostTemplatesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesRestoreMutationKey() {
  return ['templates.restore', '/templates.restore', 'POST'] as const
}

export function getPostTemplatesRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.restore']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.restore']['$post']>) {
      return parseResponse(client['templates.restore'].$post(args, options))
    },
  })
}

export function injectPostTemplatesRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.restore']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemplatesDuplicateMutationKey() {
  return ['templates.duplicate', '/templates.duplicate', 'POST'] as const
}

export function getPostTemplatesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.duplicate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['templates.duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesDuplicateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['templates.duplicate']['$post']>) {
      return parseResponse(client['templates.duplicate'].$post(args, options))
    },
  })
}

export function injectPostTemplatesDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['templates.duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['templates.duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserMembershipsListMutationKey() {
  return ['userMemberships.list', '/userMemberships.list', 'POST'] as const
}

export function getPostUserMembershipsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['userMemberships.list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['userMemberships.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMembershipsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['userMemberships.list']['$post']>) {
      return parseResponse(client['userMemberships.list'].$post(args, options))
    },
  })
}

export function injectPostUserMembershipsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['userMemberships.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['userMemberships.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserMembershipsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserMembershipsUpdateMutationKey() {
  return ['userMemberships.update', '/userMemberships.update', 'POST'] as const
}

export function getPostUserMembershipsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['userMemberships.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['userMemberships.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMembershipsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['userMemberships.update']['$post']>) {
      return parseResponse(client['userMemberships.update'].$post(args, options))
    },
  })
}

export function injectPostUserMembershipsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['userMemberships.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['userMemberships.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserMembershipsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersInviteMutationKey() {
  return ['users.invite', '/users.invite', 'POST'] as const
}

export function getPostUsersInviteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.invite']['$post']>) {
      return parseResponse(client['users.invite'].$post(args, options))
    },
  })
}

export function injectPostUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.invite']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersInfoMutationKey() {
  return ['users.info', '/users.info', 'POST'] as const
}

export function getPostUsersInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['users.info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.info']['$post']>) {
      return parseResponse(client['users.info'].$post(args, options))
    },
  })
}

export function injectPostUsersInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersListMutationKey() {
  return ['users.list', '/users.list', 'POST'] as const
}

export function getPostUsersListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['users.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.list']['$post']>) {
      return parseResponse(client['users.list'].$post(args, options))
    },
  })
}

export function injectPostUsersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUpdateMutationKey() {
  return ['users.update', '/users.update', 'POST'] as const
}

export function getPostUsersUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.update']['$post']>) {
      return parseResponse(client['users.update'].$post(args, options))
    },
  })
}

export function injectPostUsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersUpdateRoleMutationKey() {
  return ['users.update_role', '/users.update_role', 'POST'] as const
}

export function getPostUsersUpdateRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update_role']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.update_role']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUpdateRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.update_role']['$post']>) {
      return parseResponse(client['users.update_role'].$post(args, options))
    },
  })
}

export function injectPostUsersUpdateRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update_role']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.update_role']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUpdateRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersSuspendMutationKey() {
  return ['users.suspend', '/users.suspend', 'POST'] as const
}

export function getPostUsersSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.suspend']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.suspend']['$post']>) {
      return parseResponse(client['users.suspend'].$post(args, options))
    },
  })
}

export function injectPostUsersSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.suspend']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersActivateMutationKey() {
  return ['users.activate', '/users.activate', 'POST'] as const
}

export function getPostUsersActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.activate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.activate']['$post']>) {
      return parseResponse(client['users.activate'].$post(args, options))
    },
  })
}

export function injectPostUsersActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.activate']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersDeleteMutationKey() {
  return ['users.delete', '/users.delete', 'POST'] as const
}

export function getPostUsersDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.delete']['$post']>) {
      return parseResponse(client['users.delete'].$post(args, options))
    },
  })
}

export function injectPostUsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.delete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersResendInviteMutationKey() {
  return ['users.resendInvite', '/users.resendInvite', 'POST'] as const
}

export function getPostUsersResendInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.resendInvite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.resendInvite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersResendInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.resendInvite']['$post']>) {
      return parseResponse(client['users.resendInvite'].$post(args, options))
    },
  })
}

export function injectPostUsersResendInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users.resendInvite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.resendInvite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersResendInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersNotificationsSubscribeMutationKey() {
  return ['users.notificationsSubscribe', '/users.notificationsSubscribe', 'POST'] as const
}

export function getPostUsersNotificationsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['users.notificationsSubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersNotificationsSubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']>,
    ) {
      return parseResponse(client['users.notificationsSubscribe'].$post(args, options))
    },
  })
}

export function injectPostUsersNotificationsSubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users.notificationsSubscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersNotificationsSubscribeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersNotificationsUnsubscribeMutationKey() {
  return ['users.notificationsUnsubscribe', '/users.notificationsUnsubscribe', 'POST'] as const
}

export function getPostUsersNotificationsUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['users.notificationsUnsubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersNotificationsUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']>,
    ) {
      return parseResponse(client['users.notificationsUnsubscribe'].$post(args, options))
    },
  })
}

export function injectPostUsersNotificationsUnsubscribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['users.notificationsUnsubscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersNotificationsUnsubscribeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostViewsListMutationKey() {
  return ['views.list', '/views.list', 'POST'] as const
}

export function getPostViewsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.list']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['views.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostViewsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['views.list']['$post']>) {
      return parseResponse(client['views.list'].$post(args, options))
    },
  })
}

export function injectPostViewsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['views.list']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['views.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostViewsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhookSubscriptionsListMutationKey() {
  return ['webhookSubscriptions.list', '/webhookSubscriptions.list', 'POST'] as const
}

export function getPostWebhookSubscriptionsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookSubscriptionsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']>,
    ) {
      return parseResponse(client['webhookSubscriptions.list'].$post(args, options))
    },
  })
}

export function injectPostWebhookSubscriptionsList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['webhookSubscriptions.list']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookSubscriptionsListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhookSubscriptionsCreateMutationKey() {
  return ['webhookSubscriptions.create', '/webhookSubscriptions.create', 'POST'] as const
}

export function getPostWebhookSubscriptionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookSubscriptionsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']>,
    ) {
      return parseResponse(client['webhookSubscriptions.create'].$post(args, options))
    },
  })
}

export function injectPostWebhookSubscriptionsCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['webhookSubscriptions.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookSubscriptionsCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhookSubscriptionsUpdateMutationKey() {
  return ['webhookSubscriptions.update', '/webhookSubscriptions.update', 'POST'] as const
}

export function getPostWebhookSubscriptionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookSubscriptionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']>,
    ) {
      return parseResponse(client['webhookSubscriptions.update'].$post(args, options))
    },
  })
}

export function injectPostWebhookSubscriptionsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['webhookSubscriptions.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookSubscriptionsUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhookSubscriptionsDeleteMutationKey() {
  return ['webhookSubscriptions.delete', '/webhookSubscriptions.delete', 'POST'] as const
}

export function getPostWebhookSubscriptionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookSubscriptionsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']>,
    ) {
      return parseResponse(client['webhookSubscriptions.delete'].$post(args, options))
    },
  })
}

export function injectPostWebhookSubscriptionsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['webhookSubscriptions.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhookSubscriptionsDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
