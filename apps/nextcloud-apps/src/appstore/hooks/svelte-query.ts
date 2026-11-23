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

export function getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps/categories', keyArgs] as const
}

export function getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsAppstoreApiV1AppsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryKey>
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
      ...getOcsV2PhpAppsAppstoreApiV1AppsCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsAppstoreApiV1AppsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps', keyArgs] as const
}

export function getOcsV2PhpAppsAppstoreApiV1AppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppstoreApiV1AppsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppstoreApiV1AppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsAppstoreApiV1Apps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppstoreApiV1AppsQueryKey>
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
      ...getOcsV2PhpAppsAppstoreApiV1AppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsAppstoreApiV1AppsEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps/enable', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppstoreApiV1AppsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppstoreApiV1AppsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.enable.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsAppstoreApiV1AppsEnable<
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
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['enable']['$post']
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
    const mutationDefaults = getPostOcsV2PhpAppsAppstoreApiV1AppsEnableMutationOptions<
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

export function getPostOcsV2PhpAppsAppstoreApiV1AppsDisableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps/disable', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppstoreApiV1AppsDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppstoreApiV1AppsDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.disable.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsAppstoreApiV1AppsDisable<
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
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['disable']['$post']
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
    const mutationDefaults = getPostOcsV2PhpAppsAppstoreApiV1AppsDisableMutationOptions<
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

export function getPostOcsV2PhpAppsAppstoreApiV1AppsUninstallMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps/uninstall', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppstoreApiV1AppsUninstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppstoreApiV1AppsUninstallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.uninstall.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsAppstoreApiV1AppsUninstall<
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
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['uninstall']['$post']
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
    const mutationDefaults = getPostOcsV2PhpAppsAppstoreApiV1AppsUninstallMutationOptions<
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

export function getPostOcsV2PhpAppsAppstoreApiV1AppsUpdateMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/apps/update', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppstoreApiV1AppsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppstoreApiV1AppsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.apps.update.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsAppstoreApiV1AppsUpdate<
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
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['apps']['update']['$post']
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
    const mutationDefaults = getPostOcsV2PhpAppsAppstoreApiV1AppsUpdateMutationOptions<
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

export function getPostOcsV2PhpAppsAppstoreApiV1BundlesEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/appstore/api/v1/bundles/enable', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppstoreApiV1BundlesEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppstoreApiV1BundlesEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.appstore.api.v1.bundles.enable.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsAppstoreApiV1BundlesEnable<
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
                  (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['appstore']['api']['v1']['bundles']['enable']['$post']
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
    const mutationDefaults = getPostOcsV2PhpAppsAppstoreApiV1BundlesEnableMutationOptions<
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
