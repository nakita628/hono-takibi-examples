import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBackendKey() {
  return ['backend'] as const
}

export function getS3BucketsKey() {
  return ['s3Buckets'] as const
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneMutationKey() {
  return ['backend', '/backend/:appId/environments/:backendEnvironmentName/clone', 'POST'] as const
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].environments[':backendEnvironmentName'].clone.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdEnvironmentsBackendEnvironmentNameClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
          >,
          TOnMutateResult
        >
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
      getPostBackendAppIdEnvironmentsBackendEnvironmentNameCloneMutationOptions<
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

export function getPostBackendMutationKey() {
  return ['backend', '/backend', 'POST'] as const
}

export function getPostBackendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backend.$post>>>>>,
    TError,
    InferRequestType<typeof client.backend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backend.$post>) {
      return parseResponse(client.backend.$post(args, options))
    },
  })
}

export function createPostBackend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backend.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.backend.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdApiMutationKey() {
  return ['backend', '/backend/:appId/api', 'POST'] as const
}

export function getPostBackendAppIdApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backend)[':appId']['api']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['api']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backend)[':appId']['api']['$post']>) {
      return parseResponse(client.backend[':appId'].api.$post(args, options))
    },
  })
}

export function createPostBackendAppIdApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['api']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['api']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdAuthMutationKey() {
  return ['backend', '/backend/:appId/auth', 'POST'] as const
}

export function getPostBackendAppIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['auth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['auth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backend)[':appId']['auth']['$post']>) {
      return parseResponse(client.backend[':appId'].auth.$post(args, options))
    },
  })
}

export function createPostBackendAppIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['auth']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['auth']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdConfigMutationKey() {
  return ['backend', '/backend/:appId/config', 'POST'] as const
}

export function getPostBackendAppIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backend)[':appId']['config']['$post']>) {
      return parseResponse(client.backend[':appId'].config.$post(args, options))
    },
  })
}

export function createPostBackendAppIdConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['config']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['config']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdStorageMutationKey() {
  return ['backend', '/backend/:appId/storage', 'POST'] as const
}

export function getPostBackendAppIdStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['storage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['storage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backend)[':appId']['storage']['$post']>,
    ) {
      return parseResponse(client.backend[':appId'].storage.$post(args, options))
    },
  })
}

export function createPostBackendAppIdStorage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['storage']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['storage']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdStorageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdChallengeMutationKey() {
  return ['backend', '/backend/:appId/challenge', 'POST'] as const
}

export function getPostBackendAppIdChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['challenge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']>,
    ) {
      return parseResponse(client.backend[':appId'].challenge.$post(args, options))
    },
  })
}

export function createPostBackendAppIdChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['challenge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdChallengeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveMutationKey() {
  return ['backend', '/backend/:appId/environments/:backendEnvironmentName/remove', 'POST'] as const
}

export function getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].environments[':backendEnvironmentName'].remove.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostBackendAppIdEnvironmentsBackendEnvironmentNameRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
          >,
          TOnMutateResult
        >
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
      getPostBackendAppIdEnvironmentsBackendEnvironmentNameRemoveMutationOptions<
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

export function getPostBackendAppIdApiBackendEnvironmentNameRemoveMutationKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/remove', 'POST'] as const
}

export function getPostBackendAppIdApiBackendEnvironmentNameRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiBackendEnvironmentNameRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].api[':backendEnvironmentName'].remove.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdApiBackendEnvironmentNameRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdApiBackendEnvironmentNameRemoveMutationOptions<
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

export function getPostBackendAppIdAuthBackendEnvironmentNameRemoveMutationKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/remove', 'POST'] as const
}

export function getPostBackendAppIdAuthBackendEnvironmentNameRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdAuthBackendEnvironmentNameRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].auth[':backendEnvironmentName'].remove.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdAuthBackendEnvironmentNameRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdAuthBackendEnvironmentNameRemoveMutationOptions<
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

export function getPostBackendAppIdStorageBackendEnvironmentNameRemoveMutationKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/remove', 'POST'] as const
}

export function getPostBackendAppIdStorageBackendEnvironmentNameRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdStorageBackendEnvironmentNameRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].storage[':backendEnvironmentName'].remove.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdStorageBackendEnvironmentNameRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdStorageBackendEnvironmentNameRemoveMutationOptions<
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

export function getPostBackendAppIdChallengeSessionIdRemoveMutationKey() {
  return ['backend', '/backend/:appId/challenge/:sessionId/remove', 'POST'] as const
}

export function getPostBackendAppIdChallengeSessionIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdChallengeSessionIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].challenge[':sessionId'].remove.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdChallengeSessionIdRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdChallengeSessionIdRemoveMutationOptions<
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

export function getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsMutationKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/generateModels', 'POST'] as const
}

export function getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].api[':backendEnvironmentName'].generateModels.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdApiBackendEnvironmentNameGenerateModels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
          >,
          TOnMutateResult
        >
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
      getPostBackendAppIdApiBackendEnvironmentNameGenerateModelsMutationOptions<
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

export function getPostBackendAppIdDetailsMutationKey() {
  return ['backend', '/backend/:appId/details', 'POST'] as const
}

export function getPostBackendAppIdDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['details']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['details']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backend)[':appId']['details']['$post']>,
    ) {
      return parseResponse(client.backend[':appId'].details.$post(args, options))
    },
  })
}

export function createPostBackendAppIdDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['details']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['details']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdDetailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdApiBackendEnvironmentNameDetailsMutationKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/details', 'POST'] as const
}

export function getPostBackendAppIdApiBackendEnvironmentNameDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiBackendEnvironmentNameDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].api[':backendEnvironmentName'].details.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdApiBackendEnvironmentNameDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdApiBackendEnvironmentNameDetailsMutationOptions<
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

export function getPostBackendAppIdApiBackendEnvironmentNameGetModelsMutationKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName/getModels', 'POST'] as const
}

export function getPostBackendAppIdApiBackendEnvironmentNameGetModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiBackendEnvironmentNameGetModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].api[':backendEnvironmentName'].getModels.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdApiBackendEnvironmentNameGetModels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdApiBackendEnvironmentNameGetModelsMutationOptions<
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

export function getPostBackendAppIdAuthBackendEnvironmentNameDetailsMutationKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/details', 'POST'] as const
}

export function getPostBackendAppIdAuthBackendEnvironmentNameDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdAuthBackendEnvironmentNameDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].auth[':backendEnvironmentName'].details.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdAuthBackendEnvironmentNameDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdAuthBackendEnvironmentNameDetailsMutationOptions<
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

export function getBackendAppIdJobBackendEnvironmentNameJobIdQueryKey(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backend', '/backend/:appId/job/:backendEnvironmentName/:jobId', keyArgs] as const
}

export function getBackendAppIdJobBackendEnvironmentNameJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackendAppIdJobBackendEnvironmentNameJobIdQueryKey>
  >({
    queryKey: getBackendAppIdJobBackendEnvironmentNameJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBackendAppIdJobBackendEnvironmentNameJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBackendAppIdJobBackendEnvironmentNameJobIdQueryKey>
        >
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
      ...getBackendAppIdJobBackendEnvironmentNameJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostBackendAppIdJobBackendEnvironmentNameJobIdMutationKey() {
  return ['backend', '/backend/:appId/job/:backendEnvironmentName/:jobId', 'POST'] as const
}

export function getPostBackendAppIdJobBackendEnvironmentNameJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdJobBackendEnvironmentNameJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdJobBackendEnvironmentNameJobId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdJobBackendEnvironmentNameJobIdMutationOptions<
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

export function getPostBackendAppIdStorageBackendEnvironmentNameDetailsMutationKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/details', 'POST'] as const
}

export function getPostBackendAppIdStorageBackendEnvironmentNameDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdStorageBackendEnvironmentNameDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].storage[':backendEnvironmentName'].details.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdStorageBackendEnvironmentNameDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdStorageBackendEnvironmentNameDetailsMutationOptions<
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

export function getBackendAppIdChallengeSessionIdQueryKey(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backend', '/backend/:appId/challenge/:sessionId', keyArgs] as const
}

export function getBackendAppIdChallengeSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackendAppIdChallengeSessionIdQueryKey>
  >({
    queryKey: getBackendAppIdChallengeSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backend[':appId'].challenge[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBackendAppIdChallengeSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.backend)[':appId']['challenge'][':sessionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBackendAppIdChallengeSessionIdQueryKey>
        >
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
      ...getBackendAppIdChallengeSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBackendAppIdAuthBackendEnvironmentNameImportMutationKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName/import', 'POST'] as const
}

export function getPostBackendAppIdAuthBackendEnvironmentNameImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdAuthBackendEnvironmentNameImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].auth[':backendEnvironmentName'].import.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdAuthBackendEnvironmentNameImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdAuthBackendEnvironmentNameImportMutationOptions<
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

export function getPostBackendAppIdStorageBackendEnvironmentNameImportMutationKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName/import', 'POST'] as const
}

export function getPostBackendAppIdStorageBackendEnvironmentNameImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdStorageBackendEnvironmentNameImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].storage[':backendEnvironmentName'].import.$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdStorageBackendEnvironmentNameImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdStorageBackendEnvironmentNameImportMutationOptions<
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

export function getPostBackendAppIdJobBackendEnvironmentNameMutationKey() {
  return ['backend', '/backend/:appId/job/:backendEnvironmentName', 'POST'] as const
}

export function getPostBackendAppIdJobBackendEnvironmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdJobBackendEnvironmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].job[':backendEnvironmentName'].$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdJobBackendEnvironmentName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdJobBackendEnvironmentNameMutationOptions<
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

export function getPostS3BucketsMutationKey() {
  return ['s3Buckets', '/s3Buckets', 'POST'] as const
}

export function getPostS3BucketsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.s3Buckets.$post>>>>>,
    TError,
    InferRequestType<typeof client.s3Buckets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostS3BucketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.s3Buckets.$post>) {
      return parseResponse(client.s3Buckets.$post(args, options))
    },
  })
}

export function createPostS3Buckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.s3Buckets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.s3Buckets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostS3BucketsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdRemoveMutationKey() {
  return ['backend', '/backend/:appId/remove', 'POST'] as const
}

export function getPostBackendAppIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdRemoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backend)[':appId']['remove']['$post']>) {
      return parseResponse(client.backend[':appId'].remove.$post(args, options))
    },
  })
}

export function createPostBackendAppIdRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['remove']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBackendAppIdConfigRemoveMutationKey() {
  return ['backend', '/backend/:appId/config/remove', 'POST'] as const
}

export function getPostBackendAppIdConfigRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdConfigRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>,
    ) {
      return parseResponse(client.backend[':appId'].config.remove.$post(args, options))
    },
  })
}

export function createPostBackendAppIdConfigRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['config']['remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdConfigRemoveMutationOptions<
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

export function getPostBackendAppIdApiBackendEnvironmentNameMutationKey() {
  return ['backend', '/backend/:appId/api/:backendEnvironmentName', 'POST'] as const
}

export function getPostBackendAppIdApiBackendEnvironmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdApiBackendEnvironmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].api[':backendEnvironmentName'].$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdApiBackendEnvironmentName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdApiBackendEnvironmentNameMutationOptions<
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

export function getPostBackendAppIdAuthBackendEnvironmentNameMutationKey() {
  return ['backend', '/backend/:appId/auth/:backendEnvironmentName', 'POST'] as const
}

export function getPostBackendAppIdAuthBackendEnvironmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdAuthBackendEnvironmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].auth[':backendEnvironmentName'].$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdAuthBackendEnvironmentName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdAuthBackendEnvironmentNameMutationOptions<
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

export function getPostBackendAppIdConfigUpdateMutationKey() {
  return ['backend', '/backend/:appId/config/update', 'POST'] as const
}

export function getPostBackendAppIdConfigUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backend)[':appId']['config']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdConfigUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>,
    ) {
      return parseResponse(client.backend[':appId'].config.update.$post(args, options))
    },
  })
}

export function createPostBackendAppIdConfigUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backend)[':appId']['config']['update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdConfigUpdateMutationOptions<
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

export function getPostBackendAppIdStorageBackendEnvironmentNameMutationKey() {
  return ['backend', '/backend/:appId/storage/:backendEnvironmentName', 'POST'] as const
}

export function getPostBackendAppIdStorageBackendEnvironmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackendAppIdStorageBackendEnvironmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
      >,
    ) {
      return parseResponse(
        client.backend[':appId'].storage[':backendEnvironmentName'].$post(args, options),
      )
    },
  })
}

export function createPostBackendAppIdStorageBackendEnvironmentName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBackendAppIdStorageBackendEnvironmentNameMutationOptions<
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
