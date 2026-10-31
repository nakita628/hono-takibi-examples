import { createRoute, z } from '@hono/zod-openapi'

const TestTargetsForShardSchema = z
  .object({
    testTargets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of test_targets must be greater than 0.',
      }),
  })
  .openapi({ description: 'Test targets for a shard.', required: [] })
  .openapi('TestTargetsForShard')

type ShardType = {
  numShards?: number
  shardIndex?: number
  testTargetsForShard?: z.infer<typeof TestTargetsForShardSchema>
}

const GoogleAutoSchema = z
  .object({})
  .openapi({
    description:
      'Enables automatic Google account login. If set, the service automatically generates a Google test account and adds it to the device, before executing the test. Note that test accounts might be reused. Many applications show their full set of functionalities when an account is present on the device. Logging into the device with these generated accounts allows testing more functionalities.',
  })
  .openapi('GoogleAuto')

const AccountSchema = z
  .object({
    googleAuto: GoogleAutoSchema.exactOptional().openapi({
      description: 'An automatic google login account.',
    }),
  })
  .openapi({ description: 'Identifies an account and how to log into it.', required: [] })
  .openapi('Account')

const AndroidDeviceSchema = z
  .object({
    androidModelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    androidVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    orientation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
  })
  .openapi({ description: 'A single Android device.', required: [] })
  .openapi('AndroidDevice')

const PerAndroidVersionInfoSchema = z
  .object({
    deviceCapacity: z
      .enum([
        'DEVICE_CAPACITY_UNSPECIFIED',
        'DEVICE_CAPACITY_HIGH',
        'DEVICE_CAPACITY_MEDIUM',
        'DEVICE_CAPACITY_LOW',
        'DEVICE_CAPACITY_NONE',
      ])
      .exactOptional()
      .openapi({ description: 'The number of online devices for an Android version.' }),
    versionId: z.string().exactOptional().openapi({ description: 'An Android version.' }),
  })
  .openapi({ description: 'A version-specific information of an Android model.', required: [] })
  .openapi('PerAndroidVersionInfo')

const AndroidModelSchema = z
  .object({
    brand: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The company that this device is branded with. Example: "Google", "Samsung".',
      }),
    codename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the industrial design. This corresponds to android.os.Build.DEVICE.',
      }),
    form: z
      .enum(['DEVICE_FORM_UNSPECIFIED', 'VIRTUAL', 'PHYSICAL', 'EMULATOR'])
      .exactOptional()
      .openapi({ description: 'Whether this device is virtual or physical.' }),
    formFactor: z
      .enum(['DEVICE_FORM_FACTOR_UNSPECIFIED', 'PHONE', 'TABLET', 'WEARABLE'])
      .exactOptional()
      .openapi({ description: 'Whether this device is a phone, tablet, wearable, etc.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique opaque id for this model. Use this for invoking the TestExecutionService.',
      }),
    lowFpsVideoRecording: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config.',
      }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The manufacturer of this device.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5".',
      }),
    perVersionInfo: z
      .array(PerAndroidVersionInfoSchema)
      .exactOptional()
      .openapi({ description: 'Version-specific information of an Android model.' }),
    screenDensity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Screen density in DPI. This corresponds to ro.sf.lcd_density' }),
    screenX: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Screen size in the horizontal (X) dimension measured in pixels.' }),
    screenY: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Screen size in the vertical (Y) dimension measured in pixels.' }),
    supportedAbis: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version.',
      }),
    supportedVersionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of Android versions this device supports.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Tags for this dimension. Examples: "default", "preview", "deprecated".',
      }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a thumbnail image (photo) of the device.' }),
  })
  .openapi({ description: 'A description of an Android device tests may be run on.', required: [] })
  .openapi('AndroidModel')

const LocaleSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id for this locale. Example: "en_US".' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-friendly name for this language/locale. Example: "English".',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-friendly string representing the region for this locale. Example: "United States". Not present for every locale.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags for this dimension. Example: "default".' }),
  })
  .openapi({ description: 'A location/region designation for language.', required: [] })
  .openapi('Locale')

const OrientationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id for this orientation. Example: "portrait".' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-friendly name for this orientation. Example: "portrait".' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags for this dimension. Example: "default".' }),
  })
  .openapi({ description: 'Screen orientation of the device.', required: [] })
  .openapi('Orientation')

const AndroidRuntimeConfigurationSchema = z
  .object({
    locales: z
      .array(LocaleSchema)
      .exactOptional()
      .openapi({ description: 'The set of available locales.' }),
    orientations: z
      .array(OrientationSchema)
      .exactOptional()
      .openapi({ description: 'The set of available orientations.' }),
  })
  .openapi({
    description: 'Android configuration that can be selected at the time a test is run.',
    required: [],
  })
  .openapi('AndroidRuntimeConfiguration')

const DistributionSchema = z
  .object({
    marketShare: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated fraction (0-1) of the total market with this configuration.',
      }),
    measurementTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this distribution was measured.' }),
  })
  .openapi({
    description:
      'Data about the relative number of devices running a given configuration of the Android platform.',
    required: [],
  })
  .openapi('Distribution')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const AndroidVersionSchema = z
  .object({
    apiLevel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The API level for this Android version. Examples: 18, 19.' }),
    codeName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The code name for this Android version. Examples: "JellyBean", "KitKat".',
      }),
    distribution: DistributionSchema.exactOptional().openapi({
      description: 'Market share for this version.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque id for this Android version. Use this id to invoke the TestExecutionService.',
      }),
    releaseDate: DateSchema.exactOptional().openapi({
      description: 'The date this Android version became available in the market.',
    }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Tags for this dimension. Examples: "default", "preview", "deprecated".',
      }),
    versionString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing this version of the Android OS. Examples: "4.3", "4.4".',
      }),
  })
  .openapi({ description: 'A version of the Android OS.', required: [] })
  .openapi('AndroidVersion')

const AndroidDeviceCatalogSchema = z
  .object({
    models: z
      .array(AndroidModelSchema)
      .exactOptional()
      .openapi({ description: 'The set of supported Android device models.' }),
    runtimeConfiguration: AndroidRuntimeConfigurationSchema.exactOptional().openapi({
      description: 'The set of supported runtime configurations.',
    }),
    versions: z
      .array(AndroidVersionSchema)
      .exactOptional()
      .openapi({ description: 'The set of supported Android OS versions.' }),
  })
  .openapi({ description: 'The currently supported Android devices.', required: [] })
  .openapi('AndroidDeviceCatalog')

const AndroidDeviceListSchema = z
  .object({
    androidDevices: z
      .array(AndroidDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Required. A list of Android devices.' }),
  })
  .openapi({
    description: 'A list of Android device configurations in which the test is to be executed.',
    required: [],
  })
  .openapi('AndroidDeviceList')

const FileReferenceSchema = z
  .object({
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)',
      }),
  })
  .openapi({ description: 'A reference to a file, used for user inputs.', required: [] })
  .openapi('FileReference')

const AppBundleSchema = z
  .object({
    bundleLocation: FileReferenceSchema.exactOptional().openapi({
      description: '.aab file representing the app bundle under test.',
    }),
  })
  .openapi({
    description:
      'An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.',
    required: [],
  })
  .openapi('AppBundle')

const ManualShardingSchema = z
  .object({
    testTargetsForShard: z
      .array(TestTargetsForShardSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Group of packages, classes, and/or test methods to be run for each manually-created shard. You must specify at least one shard if this field is present. When you select one or more physical devices, the number of repeated test_targets_for_shard must be <= 50. When you select one or more ARM virtual devices, it must be <= 100. When you select only x86 virtual devices, it must be <= 500.',
      }),
  })
  .openapi({
    description:
      'Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.',
    required: [],
  })
  .openapi('ManualSharding')

const UniformShardingSchema = z
  .object({
    numShards: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The total number of shards to create. This must always be a positive number that is no greater than the total number of test cases. When you select one or more physical devices, the number of shards must be <= 50. When you select one or more ARM virtual devices, it must be <= 100. When you select only x86 virtual devices, it must be <= 500.',
      }),
  })
  .openapi({
    description:
      'Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.',
    required: [],
  })
  .openapi('UniformSharding')

const ShardingOptionSchema = z
  .object({
    manualSharding: ManualShardingSchema.exactOptional().openapi({
      description:
        'Shards test cases into the specified groups of packages, classes, and/or methods.',
    }),
    uniformSharding: UniformShardingSchema.exactOptional().openapi({
      description: 'Uniformly shards test cases given a total number of shards.',
    }),
  })
  .openapi({ description: 'Options for enabling sharding.', required: [] })
  .openapi('ShardingOption')

const AndroidInstrumentationTestSchema = z
  .object({
    appApk: FileReferenceSchema.exactOptional().openapi({
      description: 'The APK for the application under test.',
    }),
    appBundle: AppBundleSchema.exactOptional().openapi({
      description: 'A multi-apk app bundle for the application under test.',
    }),
    appPackageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The java package for the application under test. The default value is determined by examining the application's manifest.",
      }),
    orchestratorOption: z
      .enum(['ORCHESTRATOR_OPTION_UNSPECIFIED', 'USE_ORCHESTRATOR', 'DO_NOT_USE_ORCHESTRATOR'])
      .exactOptional()
      .openapi({
        description:
          'The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator.',
      }),
    shardingOption: ShardingOptionSchema.exactOptional().openapi({
      description: 'The option to run tests in multiple shards in parallel.',
    }),
    testApk: FileReferenceSchema.exactOptional().openapi({
      description: 'Required. The APK containing the test code to be executed.',
    }),
    testPackageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The java package for the test to be executed. The default value is determined by examining the application's manifest.",
      }),
    testRunnerClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The InstrumentationTestRunner class. The default value is determined by examining the application's manifest.",
      }),
    testTargets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.',
      }),
  })
  .openapi({
    description:
      'A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.',
    required: [],
  })
  .openapi('AndroidInstrumentationTest')

const AndroidMatrixSchema = z
  .object({
    androidModelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    androidVersionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    locales: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    orientations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
  })
  .openapi({
    description:
      'A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.',
    required: [],
  })
  .openapi('AndroidMatrix')

const RoboDirectiveSchema = z
  .object({
    actionType: z
      .enum(['ACTION_TYPE_UNSPECIFIED', 'SINGLE_CLICK', 'ENTER_TEXT', 'IGNORE'])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of action that Robo should perform on the specified element.',
      }),
    inputText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name.',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html',
      }),
  })
  .openapi({
    description:
      'Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.',
    required: [],
  })
  .openapi('RoboDirective')

const LauncherActivityIntentSchema = z
  .object({})
  .openapi({ description: 'Specifies an intent that starts the main launcher activity.' })
  .openapi('LauncherActivityIntent')

const StartActivityIntentSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action name. Required for START_ACTIVITY.' }),
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Intent categories to set on the intent.' }),
    uri: z.string().exactOptional().openapi({ description: 'URI for the action.' }),
  })
  .openapi({
    description: 'A starting intent specified by an action, uri, and categories.',
    required: [],
  })
  .openapi('StartActivityIntent')

const RoboStartingIntentSchema = z
  .object({
    launcherActivity: LauncherActivityIntentSchema.exactOptional().openapi({
      description: 'An intent that starts the main launcher activity.',
    }),
    startActivity: StartActivityIntentSchema.exactOptional().openapi({
      description: 'An intent that starts an activity with specific details.',
    }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timeout in seconds for each intent.' }),
  })
  .openapi({ description: 'Message for specifying the start activities to crawl.', required: [] })
  .openapi('RoboStartingIntent')

const AndroidRoboTestSchema = z
  .object({
    appApk: FileReferenceSchema.exactOptional().openapi({
      description: 'The APK for the application under test.',
    }),
    appBundle: AppBundleSchema.exactOptional().openapi({
      description: 'A multi-apk app bundle for the application under test.',
    }),
    appInitialActivity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The initial activity that should be used to start the app.' }),
    appPackageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The java package for the application under test. The default value is determined by examining the application's manifest.",
      }),
    maxDepth: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50.',
      }),
    maxSteps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The max number of steps Robo can execute. Default is no limit.' }),
    roboDirectives: z
      .array(RoboDirectiveSchema)
      .exactOptional()
      .openapi({
        description:
          'A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided.',
      }),
    roboMode: z
      .enum(['ROBO_MODE_UNSPECIFIED', 'ROBO_VERSION_1', 'ROBO_VERSION_2'])
      .exactOptional()
      .openapi({
        description:
          'The mode in which Robo should run. Most clients should allow the server to populate this field automatically.',
      }),
    roboScript: FileReferenceSchema.exactOptional().openapi({
      description:
        'A JSON file with a sequence of actions Robo should perform as a prologue for the crawl.',
    }),
    startingIntents: z
      .array(RoboStartingIntentSchema)
      .exactOptional()
      .openapi({
        description:
          'The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).',
      }),
  })
  .openapi({
    description:
      'A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.',
    required: [],
  })
  .openapi('AndroidRoboTest')

const AndroidTestLoopSchema = z
  .object({
    appApk: FileReferenceSchema.exactOptional().openapi({
      description: 'The APK for the application under test.',
    }),
    appBundle: AppBundleSchema.exactOptional().openapi({
      description: 'A multi-apk app bundle for the application under test.',
    }),
    appPackageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The java package for the application under test. The default is determined by examining the application's manifest.",
      }),
    scenarioLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application's manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field.",
      }),
    scenarios: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          "The list of scenarios that should be run during the test. The default is all test loops, derived from the application's manifest.",
      }),
  })
  .openapi({
    description:
      'A test of an Android Application with a Test Loop. The intent \\ will be implicitly added, since Games is the only user of this api, for the time being.',
    required: [],
  })
  .openapi('AndroidTestLoop')

const ApkSchema = z
  .object({
    location: FileReferenceSchema.exactOptional().openapi({
      description: 'The path to an APK to be installed on the device before the test begins.',
    }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The java package for the APK to be installed. Value is determined by examining the application's manifest.",
      }),
  })
  .openapi({ description: 'An Android package file to install.', required: [] })
  .openapi('Apk')

const IntentFilterSchema = z
  .object({
    actionNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The android:name value of the tag.' }),
    categoryNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The android:name value of the tag.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The android:mimeType value of the tag.' }),
  })
  .openapi({
    description:
      'The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html',
    required: [],
  })
  .openapi('IntentFilter')

const MetadataSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The android:name value' }),
    value: z.string().exactOptional().openapi({ description: 'The android:value value' }),
  })
  .openapi({
    description:
      'A tag within a manifest. https://developer.android.com/guide/topics/manifest/meta-data-element.html',
    required: [],
  })
  .openapi('Metadata')

const UsesFeatureSchema = z
  .object({
    isRequired: z.boolean().exactOptional().openapi({ description: 'The android:required value' }),
    name: z.string().exactOptional().openapi({ description: 'The android:name value' }),
  })
  .openapi({
    description:
      'A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html',
    required: [],
  })
  .openapi('UsesFeature')

const ApkManifestSchema = z
  .object({
    applicationLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-readable name for the application.' }),
    intentFilters: z.array(IntentFilterSchema).exactOptional(),
    maxSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum API level on which the application is designed to run.' }),
    metadata: z
      .array(MetadataSchema)
      .exactOptional()
      .openapi({ description: 'Meta-data tags defined in the manifest.' }),
    minSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum API level required for the application to run.' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full Java-style package name for this application, e.g. "com.example.foo".',
      }),
    targetSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Specifies the API Level on which the application is designed to run.',
      }),
    usesFeature: z
      .array(UsesFeatureSchema)
      .exactOptional()
      .openapi({ description: 'Feature usage tags defined in the manifest.' }),
    usesPermission: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Permissions declared to be used by the application' }),
    versionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version number used internally by the app.' }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version number shown to users.' }),
  })
  .openapi({
    description:
      'An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html',
    required: [],
  })
  .openapi('ApkManifest')

const ApkDetailSchema = z
  .object({ apkManifest: ApkManifestSchema.exactOptional() })
  .openapi({
    description:
      'Android application details based on application manifest and apk archive contents.',
    required: [],
  })
  .openapi('ApkDetail')

const CancelTestMatrixResponseSchema = z
  .object({
    testState: z
      .enum([
        'TEST_STATE_UNSPECIFIED',
        'VALIDATING',
        'PENDING',
        'RUNNING',
        'FINISHED',
        'ERROR',
        'UNSUPPORTED_ENVIRONMENT',
        'INCOMPATIBLE_ENVIRONMENT',
        'INCOMPATIBLE_ARCHITECTURE',
        'CANCELLED',
        'INVALID',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect.',
      }),
  })
  .openapi({
    description: 'Response containing the current state of the specified test matrix.',
    required: [],
  })
  .openapi('CancelTestMatrixResponse')

const ClientInfoDetailSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The key of detailed client information.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The value of detailed client information.' }),
  })
  .openapi({
    description:
      "Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.",
    required: [],
  })
  .openapi('ClientInfoDetail')

const ClientInfoSchema = z
  .object({
    clientInfoDetails: z
      .array(ClientInfoDetailSchema)
      .exactOptional()
      .openapi({ description: 'The list of detailed information about client.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Client name, such as gcloud.' }),
  })
  .openapi({ description: 'Information about the client which invoked the test.', required: [] })
  .openapi('ClientInfo')

const ObbFileSchema = z
  .object({
    obb: FileReferenceSchema.exactOptional().openapi({
      description: 'Required. Opaque Binary Blob (OBB) file(s) to install on the device.',
    }),
    obbFileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into \\/Android/obb/\\/ on the device.',
      }),
  })
  .openapi({
    description: 'An opaque binary blob file to install on the device before the test starts.',
    required: [],
  })
  .openapi('ObbFile')

const RegularFileSchema = z
  .object({
    content: FileReferenceSchema.exactOptional().openapi({
      description: 'Required. The source file.',
    }),
    devicePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way.',
      }),
  })
  .openapi({
    description: 'A file or directory to install on the device before the test starts.',
    required: [],
  })
  .openapi('RegularFile')

const DeviceFileSchema = z
  .object({
    obbFile: ObbFileSchema.exactOptional().openapi({
      description: 'A reference to an opaque binary blob file.',
    }),
    regularFile: RegularFileSchema.exactOptional().openapi({
      description: 'A reference to a regular file.',
    }),
  })
  .openapi({ description: 'A single device file description.', required: [] })
  .openapi('DeviceFile')

const DeviceIpBlockSchema = z
  .object({
    addedDate: DateSchema.exactOptional().openapi({
      description: 'The date this block was added to Firebase Test Lab',
    }),
    block: z
      .string()
      .exactOptional()
      .openapi({ description: 'An IP address block in CIDR notation eg: 34.68.194.64/29' }),
    form: z
      .enum(['DEVICE_FORM_UNSPECIFIED', 'VIRTUAL', 'PHYSICAL', 'EMULATOR'])
      .exactOptional()
      .openapi({ description: 'Whether this block is used by physical or virtual devices' }),
  })
  .openapi({ description: 'A single device IP block', required: [] })
  .openapi('DeviceIpBlock')

const DeviceIpBlockCatalogSchema = z
  .object({
    ipBlocks: z
      .array(DeviceIpBlockSchema)
      .exactOptional()
      .openapi({ description: 'The device IP blocks used by Firebase Test Lab' }),
  })
  .openapi({ description: 'List of IP blocks used by the Firebase Test Lab', required: [] })
  .openapi('DeviceIpBlockCatalog')

const IosDeviceSchema = z
  .object({
    iosModelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    iosVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
    orientation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options.',
      }),
  })
  .openapi({ description: 'A single iOS device.', required: [] })
  .openapi('IosDevice')

const EnvironmentSchema = z
  .object({
    androidDevice: AndroidDeviceSchema.exactOptional().openapi({
      description: 'An Android device which must be used with an Android test.',
    }),
    iosDevice: IosDeviceSchema.exactOptional().openapi({
      description: 'An iOS device which must be used with an iOS test.',
    }),
  })
  .openapi({ description: 'The environment in which the test is run.', required: [] })
  .openapi('Environment')

const IosDeviceListSchema = z
  .object({
    iosDevices: z
      .array(IosDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Required. A list of iOS devices.' }),
  })
  .openapi({
    description: 'A list of iOS device configurations in which the test is to be executed.',
    required: [],
  })
  .openapi('IosDeviceList')

const EnvironmentMatrixSchema = z
  .object({
    androidDeviceList: AndroidDeviceListSchema.exactOptional().openapi({
      description: 'A list of Android devices; the test will be run only on the specified devices.',
    }),
    androidMatrix: AndroidMatrixSchema.exactOptional().openapi({
      description: 'A matrix of Android devices.',
    }),
    iosDeviceList: IosDeviceListSchema.exactOptional().openapi({
      description: 'A list of iOS devices.',
    }),
  })
  .openapi({
    description: 'The matrix of environments in which the test is to be executed.',
    required: [],
  })
  .openapi('EnvironmentMatrix')

const EnvironmentVariableSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key for the environment variable.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for the environment variable.' }),
  })
  .openapi({
    description: 'A key-value pair passed as an environment variable to the test.',
    required: [],
  })
  .openapi('EnvironmentVariable')

const GetApkDetailsResponseSchema = z
  .object({
    apkDetail: ApkDetailSchema.exactOptional().openapi({
      description: 'Details of the Android APK.',
    }),
  })
  .openapi({
    description: 'Response containing the details of the specified Android application APK.',
    required: [],
  })
  .openapi('GetApkDetailsResponse')

const GoogleCloudStorageSchema = z
  .object({
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path.',
      }),
  })
  .openapi({ description: 'A storage location within Google cloud storage (GCS).', required: [] })
  .openapi('GoogleCloudStorage')

const PerIosVersionInfoSchema = z
  .object({
    deviceCapacity: z
      .enum([
        'DEVICE_CAPACITY_UNSPECIFIED',
        'DEVICE_CAPACITY_HIGH',
        'DEVICE_CAPACITY_MEDIUM',
        'DEVICE_CAPACITY_LOW',
        'DEVICE_CAPACITY_NONE',
      ])
      .exactOptional()
      .openapi({ description: 'The number of online devices for an iOS version.' }),
    versionId: z.string().exactOptional().openapi({ description: 'An iOS version.' }),
  })
  .openapi({ description: 'A version-specific information of an iOS model.', required: [] })
  .openapi('PerIosVersionInfo')

const IosModelSchema = z
  .object({
    deviceCapabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html',
      }),
    formFactor: z
      .enum(['DEVICE_FORM_FACTOR_UNSPECIFIED', 'PHONE', 'TABLET', 'WEARABLE'])
      .exactOptional()
      .openapi({ description: 'Whether this device is a phone, tablet, wearable, etc.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique opaque id for this model. Use this for invoking the TestExecutionService.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2".',
      }),
    perVersionInfo: z
      .array(PerIosVersionInfoSchema)
      .exactOptional()
      .openapi({ description: 'Version-specific information of an iOS model.' }),
    screenDensity: z.int32().exactOptional().openapi({ description: 'Screen density in DPI.' }),
    screenX: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Screen size in the horizontal (X) dimension measured in pixels.' }),
    screenY: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Screen size in the vertical (Y) dimension measured in pixels.' }),
    supportedVersionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of iOS major software versions this device supports.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Tags for this dimension. Examples: "default", "preview", "deprecated".',
      }),
  })
  .openapi({ description: 'A description of an iOS device tests may be run on.', required: [] })
  .openapi('IosModel')

const IosRuntimeConfigurationSchema = z
  .object({
    locales: z
      .array(LocaleSchema)
      .exactOptional()
      .openapi({ description: 'The set of available locales.' }),
    orientations: z
      .array(OrientationSchema)
      .exactOptional()
      .openapi({ description: 'The set of available orientations.' }),
  })
  .openapi({
    description: 'iOS configuration that can be selected at the time a test is run.',
    required: [],
  })
  .openapi('IosRuntimeConfiguration')

const IosVersionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque id for this iOS version. Use this id to invoke the TestExecutionService.',
      }),
    majorVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the major iOS version. Examples: "8", "9".',
      }),
    minorVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minor iOS version. Examples: "1", "2".',
      }),
    supportedXcodeVersionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The available Xcode versions for this version.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Tags for this dimension. Examples: "default", "preview", "deprecated".',
      }),
  })
  .openapi({ description: 'An iOS version.', required: [] })
  .openapi('IosVersion')

const XcodeVersionSchema = z
  .object({
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags for this Xcode version. Example: "default".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id for this version. Example: "9.2".' }),
  })
  .openapi({
    description: 'An Xcode version that an iOS version is compatible with.',
    required: [],
  })
  .openapi('XcodeVersion')

const IosDeviceCatalogSchema = z
  .object({
    models: z
      .array(IosModelSchema)
      .exactOptional()
      .openapi({ description: 'The set of supported iOS device models.' }),
    runtimeConfiguration: IosRuntimeConfigurationSchema.exactOptional().openapi({
      description: 'The set of supported runtime configurations.',
    }),
    versions: z
      .array(IosVersionSchema)
      .exactOptional()
      .openapi({ description: 'The set of supported iOS software versions.' }),
    xcodeVersions: z
      .array(XcodeVersionSchema)
      .exactOptional()
      .openapi({ description: 'The set of supported Xcode versions.' }),
  })
  .openapi({ description: 'The currently supported iOS devices.', required: [] })
  .openapi('IosDeviceCatalog')

const IosDeviceFileSchema = z
  .object({
    bundleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device.',
      }),
    content: FileReferenceSchema.exactOptional().openapi({ description: 'The source file' }),
    devicePath: z
      .string()
      .exactOptional()
      .openapi({
        description: "Location of the file on the device, inside the app's sandboxed filesystem",
      }),
  })
  .openapi({
    description: 'A file or directory to install on the device before the test starts.',
    required: [],
  })
  .openapi('IosDeviceFile')

const IosTestLoopSchema = z
  .object({
    appBundleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The bundle id for the application under test.' }),
    appIpa: FileReferenceSchema.exactOptional().openapi({
      description: 'Required. The .ipa of the application to test.',
    }),
    scenarios: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified.',
      }),
  })
  .openapi({
    description:
      'A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.',
    required: [],
  })
  .openapi('IosTestLoop')

const IosTestSetupSchema = z
  .object({
    additionalIpas: z
      .array(FileReferenceSchema)
      .exactOptional()
      .openapi({ description: 'iOS apps to install in addition to those being directly tested.' }),
    networkProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.',
      }),
    pullDirectories: z
      .array(IosDeviceFileSchema)
      .exactOptional()
      .openapi({
        description:
          "List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app's filesystem (such as /Documents) by specifying the bundle ID.",
      }),
    pushFiles: z
      .array(IosDeviceFileSchema)
      .exactOptional()
      .openapi({ description: 'List of files to push to the device before starting the test.' }),
  })
  .openapi({
    description: 'A description of how to set up an iOS device prior to running the test.',
    required: [],
  })
  .openapi('IosTestSetup')

const IosXcTestSchema = z
  .object({
    appBundleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The bundle id for the application under test.' }),
    testSpecialEntitlements: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement.',
      }),
    testsZip: FileReferenceSchema.exactOptional().openapi({
      description:
        'Required. The .zip containing the .xctestrun file and the contents of the DerivedData/Build/Products directory. The .xctestrun file in this zip is ignored if the xctestrun field is specified.',
    }),
    xcodeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports.',
      }),
    xctestrun: FileReferenceSchema.exactOptional().openapi({
      description:
        'An .xctestrun file that will override the .xctestrun file in the tests zip. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for sharding tests. Default is taken from the tests zip.',
    }),
  })
  .openapi({
    description:
      'A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.',
    required: [],
  })
  .openapi('IosXcTest')

const TrafficRuleSchema = z
  .object({
    bandwidth: z.float32().exactOptional().openapi({ description: 'Bandwidth in kbits/second.' }),
    burst: z.float32().exactOptional().openapi({ description: 'Burst size in kbits.' }),
    delay: z.string().exactOptional().openapi({ description: 'Packet delay, must be >= 0.' }),
    packetDuplicationRatio: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Packet duplication ratio (0.0 - 1.0).' }),
    packetLossRatio: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Packet loss ratio (0.0 - 1.0).' }),
  })
  .openapi({ description: 'Network emulation parameters.', required: [] })
  .openapi('TrafficRule')

const NetworkConfigurationSchema = z
  .object({
    downRule: TrafficRuleSchema.exactOptional().openapi({
      description: 'The emulation rule applying to the download traffic.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique opaque id for this network traffic configuration.' }),
    upRule: TrafficRuleSchema.exactOptional().openapi({
      description: 'The emulation rule applying to the upload traffic.',
    }),
  })
  .openapi({ required: [] })
  .openapi('NetworkConfiguration')

const NetworkConfigurationCatalogSchema = z
  .object({ configurations: z.array(NetworkConfigurationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NetworkConfigurationCatalog')

const ProvidedSoftwareCatalogSchema = z
  .object({
    androidxOrchestratorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator.',
      }),
    orchestratorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator.',
      }),
  })
  .openapi({
    description: 'The currently provided software environment on the devices under test.',
    required: [],
  })
  .openapi('ProvidedSoftwareCatalog')

const ToolResultsExecutionSchema = z
  .object({
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A tool results execution ID.' }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A tool results history ID.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The cloud project that owns the tool results execution.',
      }),
  })
  .openapi({
    description:
      'Represents a tool results execution resource. This has the results of a TestMatrix.',
    required: [],
  })
  .openapi('ToolResultsExecution')

const ToolResultsHistorySchema = z
  .object({
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A tool results history ID.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The cloud project that owns the tool results history.' }),
  })
  .openapi({ description: 'Represents a tool results history resource.', required: [] })
  .openapi('ToolResultsHistory')

const ResultStorageSchema = z
  .object({
    googleCloudStorage: GoogleCloudStorageSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    resultsUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. URL to the results in the Firebase Web Console.' }),
    toolResultsExecution: ToolResultsExecutionSchema.exactOptional().openapi({
      description: 'Output only. The tool results execution that results are written to.',
    }),
    toolResultsHistory: ToolResultsHistorySchema.exactOptional().openapi({
      description:
        'The tool results history that contains the tool results execution that results are written to. If not provided, the service will choose an appropriate value.',
    }),
  })
  .openapi({
    description: 'Locations where the results of running the test are stored.',
    required: [],
  })
  .openapi('ResultStorage')

const ShardSchema: z.ZodType<ShardType> = z
  .lazy(() =>
    z
      .object({
        numShards: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The total number of shards.' }),
        shardIndex: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The index of the shard among all the shards.' }),
        testTargetsForShard: TestTargetsForShardSchema.exactOptional().openapi({
          description: 'Output only. Test targets for each shard. Only set for manual sharding.',
        }),
      })
      .openapi({ description: 'Output only. Details about the shard.', required: [] }),
  )
  .openapi('Shard')

const SystraceSetupSchema = z
  .object({
    durationSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SystraceSetup')

const TestDetailsSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If the TestState is ERROR, then this string will contain human-readable details about the error.',
      }),
    progressMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Human-readable, detailed descriptions of the test\'s progress. For example: "Provisioning a device", "Starting Test". During the course of execution new data may be appended to the end of progress_messages.',
      }),
  })
  .openapi({
    description: 'Additional details about the progress of the running test.',
    required: [],
  })
  .openapi('TestDetails')

const TestEnvironmentCatalogSchema = z
  .object({
    androidDeviceCatalog: AndroidDeviceCatalogSchema.exactOptional().openapi({
      description: 'Supported Android devices.',
    }),
    deviceIpBlockCatalog: DeviceIpBlockCatalogSchema.exactOptional().openapi({
      description: 'The IP blocks used by devices in the test environment.',
    }),
    iosDeviceCatalog: IosDeviceCatalogSchema.exactOptional().openapi({
      description: 'Supported iOS devices.',
    }),
    networkConfigurationCatalog: NetworkConfigurationCatalogSchema.exactOptional().openapi({
      description: 'Supported network configurations.',
    }),
    softwareCatalog: ProvidedSoftwareCatalogSchema.exactOptional().openapi({
      description: 'The software test environment provided by TestExecutionService.',
    }),
  })
  .openapi({ description: 'A description of a test environment.', required: [] })
  .openapi('TestEnvironmentCatalog')

const TestSetupSchema = z
  .object({
    account: AccountSchema.exactOptional().openapi({
      description: 'The device will be logged in on this account for the duration of the test.',
    }),
    additionalApks: z
      .array(ApkSchema)
      .exactOptional()
      .openapi({
        description:
          'APKs to install in addition to those being directly tested. Currently capped at 100.',
      }),
    directoriesToPull: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device.',
      }),
    dontAutograntPermissions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to prevent all runtime permissions to be granted at app install',
      }),
    environmentVariables: z
      .array(EnvironmentVariableSchema)
      .exactOptional()
      .openapi({
        description:
          'Environment variables to set for the test (only applicable for instrumentation tests).',
      }),
    filesToPush: z
      .array(DeviceFileSchema)
      .exactOptional()
      .openapi({ description: 'List of files to push to the device before starting the test.' }),
    networkProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog.',
      }),
    systrace: SystraceSetupSchema.exactOptional().openapi({
      description:
        'Systrace configuration for the run. Deprecated: Systrace used Python 2 which was sunsetted on 2020-01-01. Systrace is no longer supported in the Cloud Testing API, and no Systrace file will be provided in the results.',
    }),
  })
  .openapi({
    description: 'A description of how to set up the Android device prior to running the test.',
    required: [],
  })
  .openapi('TestSetup')

const TestSpecificationSchema = z
  .object({
    androidInstrumentationTest: AndroidInstrumentationTestSchema.exactOptional().openapi({
      description: 'An Android instrumentation test.',
    }),
    androidRoboTest: AndroidRoboTestSchema.exactOptional().openapi({
      description: 'An Android robo test.',
    }),
    androidTestLoop: AndroidTestLoopSchema.exactOptional().openapi({
      description: 'An Android Application with a Test Loop.',
    }),
    disablePerformanceMetrics: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disables performance metrics recording. May reduce test latency.' }),
    disableVideoRecording: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disables video recording. May reduce test latency.' }),
    iosTestLoop: IosTestLoopSchema.exactOptional().openapi({
      description: 'An iOS application with a test loop.',
    }),
    iosTestSetup: IosTestSetupSchema.exactOptional().openapi({
      description: 'Test setup requirements for iOS.',
    }),
    iosXcTest: IosXcTestSchema.exactOptional().openapi({
      description: 'An iOS XCTest, via an .xctestrun file.',
    }),
    testSetup: TestSetupSchema.exactOptional().openapi({
      description: 'Test setup requirements for Android e.g. files to install, bootstrap scripts.',
    }),
    testTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min.',
      }),
  })
  .openapi({ description: 'A description of how to run the test.', required: [] })
  .openapi('TestSpecification')

const ToolResultsStepSchema = z
  .object({
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A tool results execution ID.' }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A tool results history ID.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The cloud project that owns the tool results step.' }),
    stepId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A tool results step ID.' }),
  })
  .openapi({
    description:
      'Represents a tool results step resource. This has the results of a TestExecution.',
    required: [],
  })
  .openapi('ToolResultsStep')

const TestExecutionSchema = z
  .object({
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'Output only. How the host machine(s) are configured.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique id set by the service.' }),
    matrixId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Id of the containing TestMatrix.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The cloud project that owns the test execution.' }),
    shard: ShardSchema.exactOptional().openapi({
      description: 'Output only. Details about the shard.',
    }),
    state: z
      .enum([
        'TEST_STATE_UNSPECIFIED',
        'VALIDATING',
        'PENDING',
        'RUNNING',
        'FINISHED',
        'ERROR',
        'UNSUPPORTED_ENVIRONMENT',
        'INCOMPATIBLE_ENVIRONMENT',
        'INCOMPATIBLE_ARCHITECTURE',
        'CANCELLED',
        'INVALID',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates the current progress of the test execution (e.g., FINISHED).',
      }),
    testDetails: TestDetailsSchema.exactOptional().openapi({
      description: 'Output only. Additional details about the running test.',
    }),
    testSpecification: TestSpecificationSchema.exactOptional().openapi({
      description: 'Output only. How to run the test.',
    }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this test execution was initially created.' }),
    toolResultsStep: ToolResultsStepSchema.exactOptional().openapi({
      description: 'Output only. Where the results for this execution are written.',
    }),
  })
  .openapi({ description: 'A single test executed in a single environment.', required: [] })
  .openapi('TestExecution')

const TestMatrixSchema = z
  .object({
    clientInfo: ClientInfoSchema.exactOptional().openapi({
      description: 'Information about the client which invoked the test.',
    }),
    environmentMatrix: EnvironmentMatrixSchema.exactOptional().openapi({
      description: 'Required. The devices the tests are being executed on.',
    }),
    failFast: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation.',
      }),
    flakyTestAttempts: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns.',
      }),
    invalidMatrixDetails: z
      .enum([
        'INVALID_MATRIX_DETAILS_UNSPECIFIED',
        'DETAILS_UNAVAILABLE',
        'MALFORMED_APK',
        'MALFORMED_TEST_APK',
        'NO_MANIFEST',
        'NO_PACKAGE_NAME',
        'INVALID_PACKAGE_NAME',
        'TEST_SAME_AS_APP',
        'NO_INSTRUMENTATION',
        'NO_SIGNATURE',
        'INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE',
        'NO_TEST_RUNNER_CLASS',
        'NO_LAUNCHER_ACTIVITY',
        'FORBIDDEN_PERMISSIONS',
        'INVALID_ROBO_DIRECTIVES',
        'INVALID_RESOURCE_NAME',
        'INVALID_DIRECTIVE_ACTION',
        'TEST_LOOP_INTENT_FILTER_NOT_FOUND',
        'SCENARIO_LABEL_NOT_DECLARED',
        'SCENARIO_LABEL_MALFORMED',
        'SCENARIO_NOT_DECLARED',
        'DEVICE_ADMIN_RECEIVER',
        'MALFORMED_XC_TEST_ZIP',
        'BUILT_FOR_IOS_SIMULATOR',
        'NO_TESTS_IN_XC_TEST_ZIP',
        'USE_DESTINATION_ARTIFACTS',
        'TEST_NOT_APP_HOSTED',
        'PLIST_CANNOT_BE_PARSED',
        'TEST_ONLY_APK',
        'MALFORMED_IPA',
        'MISSING_URL_SCHEME',
        'MALFORMED_APP_BUNDLE',
        'NO_CODE_APK',
        'INVALID_INPUT_APK',
        'INVALID_APK_PREVIEW_SDK',
        'MATRIX_TOO_LARGE',
        'TEST_QUOTA_EXCEEDED',
        'SERVICE_NOT_ACTIVATED',
        'UNKNOWN_PERMISSION_ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state.',
      }),
    outcomeSummary: z
      .enum(['OUTCOME_SUMMARY_UNSPECIFIED', 'SUCCESS', 'FAILURE', 'INCONCLUSIVE', 'SKIPPED'])
      .exactOptional()
      .openapi({
        description:
          'Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cloud project that owns the test matrix.' }),
    resultStorage: ResultStorageSchema.exactOptional().openapi({
      description: 'Required. Where the results for the matrix are written.',
    }),
    state: z
      .enum([
        'TEST_STATE_UNSPECIFIED',
        'VALIDATING',
        'PENDING',
        'RUNNING',
        'FINISHED',
        'ERROR',
        'UNSUPPORTED_ENVIRONMENT',
        'INCOMPATIBLE_ENVIRONMENT',
        'INCOMPATIBLE_ARCHITECTURE',
        'CANCELLED',
        'INVALID',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Indicates the current progress of the test matrix.' }),
    testExecutions: z
      .array(TestExecutionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of test executions that the service creates for this matrix.',
      }),
    testMatrixId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique id set by the service.' }),
    testSpecification: TestSpecificationSchema.exactOptional().openapi({
      description: 'Required. How to run the test.',
    }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this test matrix was initially created.' }),
  })
  .openapi({
    description:
      'TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.',
    required: [],
  })
  .openapi('TestMatrix')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1ApplicationDetailServiceGetApkDetailsRoute = createRoute({
  method: 'post',
  path: '/v1/applicationDetailService/getApkDetails',
  tags: ['applicationDetailService'],
  description: 'Gets the details of an Android application APK.',
  operationId: 'testing.applicationDetailService.getApkDetails',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: FileReferenceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetApkDetailsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectsProjectIdTestMatricesRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/testMatrices',
  tags: ['projects'],
  description:
    'Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.',
  operationId: 'testing.projects.testMatrices.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The GCE project under which this job will run.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestMatrixSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestMatrixSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{projectId}/testMatrices/{testMatrixId}',
  tags: ['projects'],
  description:
    'Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist',
  operationId: 'testing.projects.testMatrices.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Cloud project that owns the test matrix.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      testMatrixId: z
        .string()
        .openapi({
          param: {
            description: 'Unique test matrix id which was assigned by the service.',
            in: 'path',
            name: 'testMatrixId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestMatrixSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel',
  tags: ['projects'],
  description:
    'Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist',
  operationId: 'testing.projects.testMatrices.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Cloud project that owns the test.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      testMatrixId: z
        .string()
        .openapi({
          param: {
            description: 'Test matrix that will be canceled.',
            in: 'path',
            name: 'testMatrixId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CancelTestMatrixResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1TestEnvironmentCatalogEnvironmentTypeRoute = createRoute({
  method: 'get',
  path: '/v1/testEnvironmentCatalog/{environmentType}',
  tags: ['testEnvironmentCatalog'],
  description:
    'Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred',
  operationId: 'testing.testEnvironmentCatalog.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For authorization, the cloud project requesting the TestEnvironmentCatalog.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      environmentType: z
        .enum([
          'ENVIRONMENT_TYPE_UNSPECIFIED',
          'ANDROID',
          'IOS',
          'NETWORK_CONFIGURATION',
          'PROVIDED_SOFTWARE',
          'DEVICE_IP_BLOCKS',
        ])
        .openapi({
          param: {
            description: 'Required. The type of environment that should be listed.',
            in: 'path',
            name: 'environmentType',
            required: true,
            schema: {
              enum: [
                'ENVIRONMENT_TYPE_UNSPECIFIED',
                'ANDROID',
                'IOS',
                'NETWORK_CONFIGURATION',
                'PROVIDED_SOFTWARE',
                'DEVICE_IP_BLOCKS',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestEnvironmentCatalogSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})
