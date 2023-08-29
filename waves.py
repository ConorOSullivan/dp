import numpy as np
import matplotlib.pyplot as plt

# Constants
AMPLITUDE = 1  # Controls the height of the waves
WAVELENGTH = 28  # Controls the length of each wave
STEP = 0.1  # Controls the spacing between points
NUM_WAVES = 1  # Number of ocean waves

def main():
    # Generate the wave lines
    wave_lines = generate_wave_lines()

    # Concatenate the wave lines
    x = np.concatenate([wave_line[0] for wave_line in wave_lines])
    y = np.concatenate([wave_line[1] for wave_line in wave_lines])

     # Generate the wave lines
    wave_lines2 = generate_wave_lines2()

    # Concatenate the wave lines
    x2 = np.concatenate([wave_line[0] for wave_line in wave_lines2])
    y2 = np.concatenate([wave_line[1] for wave_line in wave_lines2])

    x3 = x2
    y3 = np.concatenate([w1[1] + w2[1] for w1, w2 in zip(wave_lines, wave_lines2)])
    # y3 = np.concatenate([wave_line[1] for wave_line in wave_lines2])

    # Plot the wave lines
    plt.plot(x, y, color='blue', linewidth=1)
    plt.plot(x2, y2, color='red', linewidth=1)
    plt.plot(x3, y3, color='green', linewidth=1)

    # Customize the plot
    plt.xlabel('x')
    plt.ylabel('y')
    plt.title('Ocean Waves with Steep Dropoff')

    # Show the plot
    plt.show()

def generate_wave_lines2():
    wave_lines = []
    x = np.arange(1, WAVELENGTH + 1, STEP)

    phase = 2 * np.pi
    y = .5 + np.cos(x + phase)

    # Modify the y-coordinates to create vertical drop-offs
    # for i in range(len(y)-1):
    #     if y[i] == AMPLITUDE and y[i+1] < y[i]:
    #         y[i+1] = (y[i] - AMPLITUDE) * math.random(.1,10)

    wave_lines.append((x, y))

    return wave_lines

def generate_wave_lines():
    wave_lines = []
    x = np.arange(0, WAVELENGTH, STEP)

    phase = 2 * np.pi
    y = AMPLITUDE * np.sin(x + phase)
    y2 = AMPLITUDE * np.sin(x*.1 + phase)
    y = y + y2

    # Modify the y-coordinates to create vertical drop-offs
    # for i in range(len(y)-1):
    #     if y[i] == AMPLITUDE and y[i+1] < y[i]:
    #         y[i+1] = (y[i] - AMPLITUDE) * math.random(.1,10)

    wave_lines.append((x, y))

    return wave_lines


if __name__ == '__main__':
    main()
