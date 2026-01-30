export interface Speaker {
    name: string;
    role: string;
    handle?: string;
    image: string;
    type: 'Core' | 'L2' | 'Community';
    status: 'Physical' | 'Virtual';
}

export interface ScheduleItem {
    time: string;
    title: string;
    description: string;
}

export interface ScheduleDay {
    day: number;
    date: string;
    theme: string;
    morning: ScheduleItem;
    afternoon: ScheduleItem;
    evening: ScheduleItem;
    focus: string;
}

export interface Lab {
    title: string;
    focus: string;
    concept: string;
    activity: string;
    tooling: string[];
}
