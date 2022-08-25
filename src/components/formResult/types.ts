type success = { status: 'success'; data: string };
type error = { status: 'success'; data: string };
type pending = { status: 'success'; data: string };

export type Status = success | error | pending;
