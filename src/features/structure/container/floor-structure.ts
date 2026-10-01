import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { TableItem } from '../models/tables.models';

type TableStatus = TableItem['status'];

@Component({
  selector: 'app-floor-structure',
  templateUrl: './floor-structure.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloorStructureComponent {
  tables = signal<TableItem[]>([
    // Middle column (1-11), top to bottom, running alongside the partition wall, evenly spaced (42px step)
    {
      id: 1,
      label: '1',
      x: 460,
      y: 480,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 2,
      label: '2',
      x: 460,
      y: 438,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 3,
      label: '3',
      x: 460,
      y: 396,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'reserved',
      capacity: 2,
    },
    {
      id: 4,
      label: '4',
      x: 460,
      y: 354,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 5,
      label: '5',
      x: 460,
      y: 312,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 6,
      label: '6',
      x: 460,
      y: 270,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 7,
      label: '7',
      x: 460,
      y: 228,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 8,
      label: '8',
      x: 460,
      y: 186,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 9,
      label: '9',
      x: 460,
      y: 144,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 10,
      label: '10',
      x: 460,
      y: 102,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 11,
      label: '11',
      x: 460,
      y: 60,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },

    // Curved booth row along the far wall
    // 12 + 14 pushed together on the x axis, 4 chairs combined
    {
      id: 12,
      label: '12',
      x: 280,
      y: 60,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 2,
    },
    {
      id: 14,
      label: '14',
      x: 238,
      y: 60,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 2,
    },
    {
      id: 15,
      label: '15',
      x: 115,
      y: 235,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 3,
    },
    // 16 + 17 pushed together on the y axis, 4 chairs combined
    {
      id: 16,
      label: '16',
      x: 80,
      y: 356,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 2,
    },
    {
      id: 17,
      label: '17',
      x: 80,
      y: 400,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 2,
    },
    {
      id: 18,
      label: '18',
      x: 185,
      y: 440,
      shape: 'circle',
      r: 22,
      status: 'available',
      capacity: 4,
    },
    {
      id: 19,
      label: '19',
      x: 325,
      y: 485,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 3,
    },
    {
      id: 20,
      label: '20',
      x: 355,
      y: 375,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 3,
    },
    {
      id: 21,
      label: '21',
      x: 305,
      y: 275,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 3,
    },

    // Right column (22-32), bottom to top, mirroring the middle column across the partition wall
    {
      id: 22,
      label: '22',
      x: 545,
      y: 480,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 23,
      label: '23',
      x: 545,
      y: 438,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 24,
      label: '24',
      x: 545,
      y: 396,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 25,
      label: '25',
      x: 545,
      y: 354,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 26,
      label: '26',
      x: 545,
      y: 312,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 27,
      label: '27',
      x: 545,
      y: 270,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 28,
      label: '28',
      x: 545,
      y: 228,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 29,
      label: '29',
      x: 545,
      y: 186,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 30,
      label: '30',
      x: 545,
      y: 144,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 31,
      label: '31',
      x: 545,
      y: 102,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },
    {
      id: 32,
      label: '32',
      x: 545,
      y: 60,
      shape: 'rect',
      width: 30,
      height: 30,
      status: 'available',
      capacity: 2,
    },

    // Far-right pairs, aligned to the same rows as 25/27/28/31 in the right column
    {
      id: 33,
      label: '33',
      x: 680,
      y: 102,
      shape: 'circle',
      r: 22,
      status: 'available',
      capacity: 4,
    },
    // 34 + 35 pushed together into one big table
    {
      id: 34,
      label: '34-35',
      x: 680,
      y: 200,
      shape: 'rect',
      width: 80,
      height: 60,
      status: 'available',
      capacity: 4,
    },
    // 36 + 37 pushed together into one big table
    {
      id: 36,
      label: '36-37',
      x: 680,
      y: 300,
      shape: 'rect',
      width: 80,
      height: 60,
      status: 'reserved',
      capacity: 4,
    },
    {
      id: 38,
      label: '38',
      x: 640,
      y: 414,
      shape: 'circle',
      r: 20,
      status: 'available',
      capacity: 2,
    },
    {
      id: 39,
      label: '39',
      x: 710,
      y: 414,
      shape: 'circle',
      r: 20,
      status: 'occupied',
      capacity: 2,
    },
    // Sleek table for 5, bottom-right corner
    {
      id: 40,
      label: '40',
      x: 680,
      y: 480,
      shape: 'rect',
      width: 70,
      height: 36,
      status: 'available',
      capacity: 5,
    },
  ]);

  selectedTable = signal<TableItem | null>(null);
  guestName = signal('');
  guestPhone = signal('');

  statusColor = computed(() => ({
    available: '#2d6b64',
    reserved: '#d9ac45',
    occupied: '#b1543f',
    blocked: '#a8a29e',
  }));

  statusLabel = computed(() => ({
    available: 'Disponible',
    reserved: 'Réservée',
    occupied: 'Occupée',
    blocked: 'Bloquée',
  }));

  selectTable(table: TableItem) {
    if (table.status === 'blocked') return;
    this.selectedTable.set(table);
    this.guestName.set('');
    this.guestPhone.set('');
  }

  closeModal() {
    this.selectedTable.set(null);
  }

  reserveSelectedTable() {
    const table = this.selectedTable();
    if (!table) return;

    this.tables.update((list) =>
      list.map((t) => (t.id === table.id ? { ...t, status: 'reserved' } : t)),
    );

    this.closeModal();
  }

  markAvailable(tableId: number) {
    this.tables.update((list) =>
      list.map((t) => (t.id === tableId ? { ...t, status: 'available' } : t)),
    );
  }

  markOccupied(tableId: number) {
    this.tables.update((list) =>
      list.map((t) => (t.id === tableId ? { ...t, status: 'occupied' } : t)),
    );
  }

  getFill(status: TableStatus): string {
    return this.statusColor()[status];
  }

  getLabel(status: TableStatus): string {
    return this.statusLabel()[status];
  }
}
