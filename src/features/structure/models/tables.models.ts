export interface TableItem {
  id: number;
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  r?: number;
  shape: 'circle' | 'rect';
  status: 'available' | 'reserved' | 'occupied' | 'blocked';
  capacity: number;
}
