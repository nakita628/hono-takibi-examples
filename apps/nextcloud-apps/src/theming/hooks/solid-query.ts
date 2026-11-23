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

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getIndexPhpAppsThemingThemeThemeIdCssQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/theme/:themeId.css', args] as const
}

export function getIndexPhpAppsThemingThemeThemeIdCssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingThemeThemeIdCssQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingThemeThemeIdCssQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.theme[':themeId.css'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingThemeThemeIdCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingThemeThemeIdCssQueryKey>
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
      ...getIndexPhpAppsThemingThemeThemeIdCssQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingImageKeyQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
) {
  return ['index.php', '/index.php/apps/theming/image/:key', args] as const
}

export function getIndexPhpAppsThemingImageKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingImageKeyQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingImageKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.image[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingImageKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['image'][':key']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['image'][':key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingImageKeyQueryKey>
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
      ...getIndexPhpAppsThemingImageKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingManifestAppQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/manifest/:app', args] as const
}

export function getIndexPhpAppsThemingManifestAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingManifestAppQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingManifestAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.manifest[':app'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingManifestApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingManifestAppQueryKey>
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
      ...getIndexPhpAppsThemingManifestAppQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingFaviconAppQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/favicon/:app', args] as const
}

export function getIndexPhpAppsThemingFaviconAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingFaviconAppQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingFaviconAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.favicon[':app'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingFaviconApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingFaviconAppQueryKey>
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
      ...getIndexPhpAppsThemingFaviconAppQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingIconAppQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
) {
  return ['index.php', '/index.php/apps/theming/icon/:app', args] as const
}

export function getIndexPhpAppsThemingIconAppQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingIconAppQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingIconAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.icon[':app'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingIconApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingIconAppQueryKey>
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
      ...getIndexPhpAppsThemingIconAppQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingImgAppImageQueryKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/img/:app/:image', args] as const
}

export function getIndexPhpAppsThemingImgAppImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingImgAppImageQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingImgAppImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.img[':app'][':image'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingImgAppImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingImgAppImageQueryKey>
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
      ...getIndexPhpAppsThemingImgAppImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIndexPhpAppsThemingBackgroundQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['index.php', '/index.php/apps/theming/background', keyArgs] as const
}

export function getIndexPhpAppsThemingBackgroundQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingBackgroundQueryKey>
  >({
    queryKey: getIndexPhpAppsThemingBackgroundQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.theming.background.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsThemingBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['theming']['background']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsThemingBackgroundQueryKey>
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
      ...getIndexPhpAppsThemingBackgroundQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIndexPhpAppsThemingBackgroundTypeMutationKey() {
  return ['index.php', '/index.php/apps/theming/background/:type', 'POST'] as const
}

export function getPostIndexPhpAppsThemingBackgroundTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpAppsThemingBackgroundTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
      >,
    ) {
      return parseResponse(
        client['index.php'].apps.theming.background[':type'].$post(args, options),
      )
    },
  })
}

export function createPostIndexPhpAppsThemingBackgroundType<
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
                    (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
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
    const mutationDefaults = getPostIndexPhpAppsThemingBackgroundTypeMutationOptions<
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

export function getDeleteIndexPhpAppsThemingBackgroundCustomMutationKey() {
  return ['index.php', '/index.php/apps/theming/background/custom', 'DELETE'] as const
}

export function getDeleteIndexPhpAppsThemingBackgroundCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexPhpAppsThemingBackgroundCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
      >,
    ) {
      return parseResponse(
        client['index.php'].apps.theming.background.custom.$delete(args, options),
      )
    },
  })
}

export function createDeleteIndexPhpAppsThemingBackgroundCustom<
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
                    (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
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
    const mutationDefaults = getDeleteIndexPhpAppsThemingBackgroundCustomMutationOptions<
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

export function getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId/enable', 'PUT'] as const
}

export function getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].enable.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnable<
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
                    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
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
    const mutationDefaults = getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationOptions<
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

export function getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsThemingApiV1ThemeThemeId<
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
                    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
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
    const mutationDefaults = getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationOptions<
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
