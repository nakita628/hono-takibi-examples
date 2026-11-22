import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsSharingApiV1RecipientsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/recipients', keyArgs] as const
}

export function getOcsV2PhpAppsSharingApiV1RecipientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSharingApiV1RecipientsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSharingApiV1RecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.recipients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSharingApiV1Recipients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['recipients']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsSharingApiV1RecipientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSharingApiV1RecipientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSharingApiV1SecretQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/secret', keyArgs] as const
}

export function getOcsV2PhpAppsSharingApiV1SecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSharingApiV1SecretQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSharingApiV1SecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSharingApiV1Secret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['secret']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsSharingApiV1SecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSharingApiV1SecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSharingApiV1ShareMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share', 'POST'] as const
}

export function getPostOcsV2PhpAppsSharingApiV1ShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSharingApiV1ShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.sharing.api.v1.share.$post(args, options))
    },
  })
}

export function createPostOcsV2PhpAppsSharingApiV1Share<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSharingApiV1ShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdStateMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/state', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].state.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['state']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdStateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/user-status', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id']['user-status'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdUserStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['user-status']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdUserStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdSourceMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/source', 'POST'] as const
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSharingApiV1ShareIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSharingApiV1ShareIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSharingApiV1ShareIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/source', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].source.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSharingApiV1ShareIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['source']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSharingApiV1ShareIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient', 'POST'] as const
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSharingApiV1ShareIdRecipient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSharingApiV1ShareIdRecipientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/secret', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.secret.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['secret']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/property', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].property.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdProperty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['property']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdPropertyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/permission', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].recipient.permission.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['recipient']['permission']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission/preset', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].permission.preset.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPreset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['permission']['preset']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id', 'POST'] as const
}

export function getPostOcsV2PhpAppsSharingApiV1ShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSharingApiV1ShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSharingApiV1ShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSharingApiV1ShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/share/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSharingApiV1ShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSharingApiV1ShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.share[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSharingApiV1ShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['share'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSharingApiV1ShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSharingApiV1SharesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/sharing/api/v1/shares', keyArgs] as const
}

export function getOcsV2PhpAppsSharingApiV1SharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSharingApiV1SharesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSharingApiV1SharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.sharing.api.v1.shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSharingApiV1Shares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['sharing']['api']['v1']['shares']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsSharingApiV1SharesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSharingApiV1SharesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
