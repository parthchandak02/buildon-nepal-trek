type Props = {
  name: string;
  picture?: string;
};

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center">
      {picture && (
        <div className="relative w-12 h-12 mr-4">
          <img
            src={picture}
            className="rounded-full"
            alt={name}
          />
        </div>
      )}
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
