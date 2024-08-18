export interface ExercisesPost{
  linkVideo: string,
  title: string
  exercises: Exercise[]
}

export interface Exercise{
  exercise: string
  answer: string
}

export interface ExercisesGet extends ExercisesPost{
  id: string
}
