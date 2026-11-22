import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetIndexPhpAppsThemingThemeThemeIdCssKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/theme/:themeId.css', args] as const
}

export function useGetIndexPhpAppsThemingThemeThemeIdCss<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingThemeThemeIdCssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['index.php'].apps.theming.theme[':themeId.css'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingThemeThemeIdCss<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingThemeThemeIdCssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['index.php'].apps.theming.theme[':themeId.css'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingImageKeyKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
) {
  return ['index.php', '/index.php/apps/theming/image/:key', args] as const
}

export function useGetIndexPhpAppsThemingImageKey<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingImageKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.image[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingImageKey<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingImageKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.image[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingManifestAppKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/manifest/:app', args] as const
}

export function useGetIndexPhpAppsThemingManifestApp<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingManifestAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.manifest[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingManifestApp<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingManifestAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.manifest[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingFaviconAppKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/favicon/:app', args] as const
}

export function useGetIndexPhpAppsThemingFaviconApp<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingFaviconAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.favicon[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingFaviconApp<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingFaviconAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.favicon[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingIconAppKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
) {
  return ['index.php', '/index.php/apps/theming/icon/:app', args] as const
}

export function useGetIndexPhpAppsThemingIconApp<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingIconAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.icon[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingIconApp<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingIconAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.icon[':app'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingImgAppImageKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/theming/img/:app/:image', args] as const
}

export function useGetIndexPhpAppsThemingImgAppImage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingImgAppImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['index.php'].apps.theming.img[':app'][':image'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingImgAppImage<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingImgAppImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['index.php'].apps.theming.img[':app'][':image'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsThemingBackgroundKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['index.php', '/index.php/apps/theming/background', keyArgs] as const
}

export function useGetIndexPhpAppsThemingBackground<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.background.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsThemingBackground<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsThemingBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.theming.background.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexPhpAppsThemingBackgroundTypeKey() {
  return ['index.php', '/index.php/apps/theming/background/:type', 'POST'] as const
}

export function usePostIndexPhpAppsThemingBackgroundType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpAppsThemingBackgroundTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
          >
        },
      ) =>
        parseResponse(
          client['index.php'].apps.theming.background[':type'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIndexPhpAppsThemingBackgroundCustomKey() {
  return ['index.php', '/index.php/apps/theming/background/custom', 'DELETE'] as const
}

export function useDeleteIndexPhpAppsThemingBackgroundCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIndexPhpAppsThemingBackgroundCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['index.php'].apps.theming.background.custom.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId/enable', 'PUT'] as const
}

export function usePutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].enable.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsThemingApiV1ThemeThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
