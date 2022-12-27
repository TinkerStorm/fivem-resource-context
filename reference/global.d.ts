declare type Primitive = string | number | boolean;

declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;
declare function GetResourceMetadata(resourceName: `${string}_extra`, metadataKey: string, index: number): Record<string, Primitive>;
declare function GetResourceMetadata<T>(resourceName: string, metadataKey: string, index: number): T;

declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

declare function exports(name: string, predicate: Function): void;